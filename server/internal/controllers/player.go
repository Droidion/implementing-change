package controllers

import (
	"github.com/droidion/implementing-change/internal/auth"
	"github.com/droidion/implementing-change/internal/db"
	"github.com/gofiber/fiber/v2"
)



func checkPlayer(c *fiber.Ctx) error {
	tokenMeta, err := auth.ExtractTokenMetadata(c)
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
	payload := new(db.UserProgress)
	if err := c.BodyParser(payload); err != nil {
		return response401(c, err)
	}

	tokenMeta, err := auth.ExtractTokenMetadata(c)
	if err != nil {
		return response401(c, err)
	}

	db.InsertResult(tokenMeta.UserId, payload)
	// TODO logic
	return nil
}
