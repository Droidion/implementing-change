package controllers

import (
	"github.com/droidion/implementing-change/internal/models"
	"github.com/gofiber/fiber/v2"
	"github.com/rs/zerolog/log"
)

// Контроллеры для игрока

// SubmitResultController контроллер для логирования результатов обсчета события командой
func SubmitResultController(c *fiber.Ctx) error {
	// Извлекаем содержимое токена
	tokenMeta, err := models.ExtractTokenMetadata(c)
	if err != nil {
		log.Error().Err(err).Msg("HTTP Unauthorized. Could not extract data from token")
		return c.Status(fiber.StatusUnauthorized).SendString("Could not extract data from token")
	}
	// Проверяем что в токене есть роль игрок
	if tokenMeta.Role != "player" {
		log.Error().Msg("HTTP Unauthorized. Incorrect user role in token")
		return c.Status(fiber.StatusUnauthorized).SendString("Incorrect user role in token")
	}
	// Извлекаем прогресс игры из тела запроса
	payload := new(models.Progress)
	if err := c.BodyParser(payload); err != nil {
		log.Error().Err(err).Msg("HTTP Bad Request. Incorrect request body")
		return c.Status(fiber.StatusBadRequest).SendString("Incorrect request body")
	}
	// Заносим прогресс игры в базу
	err = models.InsertResult(tokenMeta.UserId, payload)
	if err != nil {
		log.Error().Err(err).Msg("HTTP Internal Serve rError. Could not save data to database")
		return c.Status(fiber.StatusInternalServerError).SendString("Could not save data to database")
	}
	return nil
}
