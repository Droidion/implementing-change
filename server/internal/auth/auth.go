package auth

import (
	"github.com/droidion/implementing-change/internal/db"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
	"os"
	"strconv"
	"strings"
	"time"
)

// AuthenticatedPlayer данные авторизованного игрока
type AuthenticatedPlayer struct {
	Team  int    `json:"team"`
	Token string `json:"token"`
}

// AuthenticatedAdmin данные авторизованного админа
type AuthenticatedAdmin struct {
	Login string `json:"login"`
	Name  string `json:"name"`
	Token string `json:"token"`
}

// TokenMetadata содержимое токена
type TokenMetadata struct {
	Expires int64
	Team    int
	UserId    int
	Role    string
}

// AuthenticatePlayer пытается авторизовать пользователя и сгенерировать для него JWT токен
func AuthenticatePlayer(pin string) (*AuthenticatedPlayer, error) {
	user, err := db.GetUserByPin(pin)
	if err != nil {
		return nil, err
	}
	token, err := generateNewAccessToken(user.UserId, user.Team, "player")
	if err != nil {
		return nil, err
	}
	authUser := AuthenticatedPlayer{Team: user.Team, Token: token}
	db.LogSignIn(user)
	return &authUser, nil
}

// AuthenticateAdmin пытается авторизовать админа и сгенерировать для него JWT токен
func AuthenticateAdmin(login string, password string) (*AuthenticatedAdmin, error) {
	admin, err := db.GetAdminByLogin(login)
	if err != nil {
		return nil, err
	}

	err = CompareHashAndPassword(admin.Password, password)
	if err != nil {
		return nil, err
	}

	token, err := generateNewAccessToken(0, 0, "admin")
	if err != nil {
		return nil, err
	}

	authUser := AuthenticatedAdmin{Login: admin.Login, Name: admin.Name, Token: token}
	return &authUser, nil
}

// GenerateNewAccessToken генерирует новый JWT токен
func generateNewAccessToken(userId int, team int, role string) (string, error) {
	// TODO разнести логику генерации для игрока и админа
	secret := os.Getenv("JWT_SECRET_KEY")
	minutesCount, _ := strconv.Atoi(os.Getenv("JWT_SECRET_KEY_EXPIRE_MINUTES_COUNT"))
	claims := jwt.MapClaims{}
	claims["exp"] = time.Now().Add(time.Minute * time.Duration(minutesCount)).Unix()
	claims["team"] = team
	claims["role"] = role
	claims["userId"] = userId
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	t, err := token.SignedString([]byte(secret))
	if err != nil {
		return "", err
	}
	return t, nil
}

// ExtractTokenMetadata достает данные из JWT токена.
func ExtractTokenMetadata(c *fiber.Ctx) (*TokenMetadata, error) {
	token, err := verifyToken(c)
	if err != nil {
		return nil, err
	}

	// Setting and checking token and credentials.
	claims, ok := token.Claims.(jwt.MapClaims)
	if ok && token.Valid {
		return &TokenMetadata{
			Expires: int64(claims["exp"].(float64)),
			Team:    int(claims["team"].(float64)),
			Role:    claims["role"].(string),
			UserId:    int(claims["userId"].(float64)),
		}, nil
	}

	return nil, err
}

// verifyToken достает токен из http ответа и проверяет его валидность.
func verifyToken(c *fiber.Ctx) (*jwt.Token, error) {
	tokenString := extractToken(c)

	token, err := jwt.Parse(tokenString, jwtKeyFunc)
	if err != nil {
		return nil, err
	}

	return token, nil
}

// extractToken достает токен из заголовка http запроса.
func extractToken(c *fiber.Ctx) string {
	bearToken := c.Get("Authorization")

	// Normally Authorization HTTP header.
	onlyToken := strings.Split(bearToken, " ")
	if len(onlyToken) == 2 {
		return onlyToken[1]
	}

	return ""
}

// jwtKeyFunc отдает ключ шифрования токена
func jwtKeyFunc(token *jwt.Token) (interface{}, error) {
	return []byte(os.Getenv("JWT_SECRET_KEY")), nil
}
