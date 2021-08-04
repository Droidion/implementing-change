package server

import (
	"github.com/gofiber/fiber/v2"
	"github.com/rs/zerolog/log"
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
	if err.Error() == "Missing or malformed JWT" {
		log.Error().Err(err).Msg("HTTP Bad Request. JWT parsing error")
		return c.Status(fiber.StatusBadRequest).SendString("JWT parsing error")
	}
	log.Error().Err(err).Msg("HTTP Unauthorized. No access based on JWT content")
	return c.Status(fiber.StatusUnauthorized).SendString("No access based on JWT content")
}
