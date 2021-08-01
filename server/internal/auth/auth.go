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

type AuthenticatedUser struct {
	Team int `json:"team"`
	Token string `json:"token"`
}

type TokenMetadata struct {
	Expires int64
	Team int
	Role string
}

func AuthenticateUser(pin string) (*AuthenticatedUser, error) {
	user, err := db.GetUserByPin(pin)
	if err != nil {
		return nil, err
	}
	token, err := generateNewAccessToken(user.Team, "player")
	if err != nil {
		return nil, err
	}
	authUser := AuthenticatedUser{Team: user.Team, Token: token}
	return &authUser, nil
}

// GenerateNewAccessToken func for generate a new Access token.
func generateNewAccessToken(team int, role string) (string, error) {
	// Set secret key from .env file.
	secret := os.Getenv("JWT_SECRET_KEY")

	// Set expires minutes count for secret key from .env file.
	minutesCount, _ := strconv.Atoi(os.Getenv("JWT_SECRET_KEY_EXPIRE_MINUTES_COUNT"))

	// Create a new claims.
	claims := jwt.MapClaims{}

	// Set public claims:
	claims["exp"] = time.Now().Add(time.Minute * time.Duration(minutesCount)).Unix()
	claims["team"] = team
	claims["role"] = role

	// Create a new JWT access token with claims.
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Generate token.
	t, err := token.SignedString([]byte(secret))
	if err != nil {
		// Return error, it JWT token generation failed.
		return "", err
	}

	return t, nil
}

// ExtractTokenMetadata func to extract metadata from JWT.
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
			Team: claims["team"].(int),
			Role: claims["exp"].(string),
		}, nil
	}

	return nil, err
}

func extractToken(c *fiber.Ctx) string {
	bearToken := c.Get("Authorization")

	// Normally Authorization HTTP header.
	onlyToken := strings.Split(bearToken, " ")
	if len(onlyToken) == 2 {
		return onlyToken[1]
	}

	return ""
}

func verifyToken(c *fiber.Ctx) (*jwt.Token, error) {
	tokenString := extractToken(c)

	token, err := jwt.Parse(tokenString, jwtKeyFunc)
	if err != nil {
		return nil, err
	}

	return token, nil
}

func jwtKeyFunc(token *jwt.Token) (interface{}, error) {
	return []byte(os.Getenv("JWT_SECRET_KEY")), nil
}