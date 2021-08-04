package controllers

import (
	"github.com/droidion/implementing-change/internal/models"
	"github.com/gofiber/fiber/v2"
)

// Контроллеры для игрока

// checkPlayer проверяет, указана ли в токене роль игрок
func checkPlayer(c *fiber.Ctx) error {
	tokenMeta, err := models.ExtractTokenMetadata(c)
	if err != nil {
		return response401(c, err)
	}
	if tokenMeta.Role != "player" {
		return c.SendStatus(fiber.StatusUnauthorized)
	}
	return nil
}

// SubmitResultController контроллер для логирования результатов обсчета события командой
func SubmitResultController(c *fiber.Ctx) error {
	checkPlayer(c)
	payload := new(models.Progress)
	if err := c.BodyParser(payload); err != nil {
		return response401(c, err)
	}

	tokenMeta, err := models.ExtractTokenMetadata(c)
	if err != nil {
		return response401(c, err)
	}

	models.InsertResult(tokenMeta.UserId, payload)
	// TODO logic
	return nil
}
