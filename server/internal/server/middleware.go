package server

import (
	"github.com/gofiber/fiber/v2"
	"os"

	jwtMiddleware "github.com/gofiber/jwt/v2"
)

// Middleware сервера

// JWTProtected инициализирует middleware для проверки JWT токена в запросе.
func JWTProtected() func(*fiber.Ctx) error {
	config := jwtMiddleware.Config{
		SigningKey:   []byte(os.Getenv("JWT_SECRET_KEY")),
		ContextKey:   "jwt", // used in private routes
		ErrorHandler: jwtError,
	}
	return jwtMiddleware.New(config)
}

// jwtError формирует http ответ с ошибкой проверки токена.
func jwtError(c *fiber.Ctx, err error) error {
	errObj := fiber.Map{
		"error": true,
		"msg":   err.Error(),
	}
	if err.Error() == "Missing or malformed JWT" {
		return c.Status(fiber.StatusBadRequest).JSON(errObj)
	}
	return c.Status(fiber.StatusUnauthorized).JSON(errObj)
}
