package models

import (
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"github.com/rotisserie/eris"
	"os"
	"strconv"
	"strings"
	"time"
)

// Бизнес-логика сущности Токен.

// TokenClaims содержимое токена
type TokenClaims struct {
	Expires int64
	Team    int
	UserId  int
	Role    string
}

// GenerateNewAccessToken генерирует новый токен
func GenerateNewAccessToken(userId int, team int, role string) (string, error) {
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
		return "", eris.Wrap(err, "error generating new access token")
	}
	return t, nil
}

// ExtractTokenMetadata достает содержимое токена.
func ExtractTokenMetadata(c *fiber.Ctx) (*TokenClaims, error) {
	token, err := verifyToken(c)
	if err != nil {
		return nil, err
	}
	claims, ok := token.Claims.(jwt.MapClaims)
	if ok && token.Valid {
		return &TokenClaims{
			Expires: int64(claims["exp"].(float64)),
			Team:    int(claims["team"].(float64)),
			Role:    claims["role"].(string),
			UserId:  int(claims["userId"].(float64)),
		}, nil
	}
	return nil, eris.Wrap(err, "error extracting metadata from token")
}

// verifyToken достает токен из http-запроса и проверяет его валидность.
func verifyToken(c *fiber.Ctx) (*jwt.Token, error) {
	tokenString := extractToken(c)
	token, err := jwt.Parse(tokenString, jwtKeyFunc)
	if err != nil {
		return nil, err
	}
	return token, eris.Wrap(err, "error verifying token")
}

// extractToken достает токен из заголовка http-запроса.
func extractToken(c *fiber.Ctx) string {
	bearToken := c.Get("Authorization")
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
