package controllers

import (
	"github.com/droidion/implementing-change/internal/auth"
	"github.com/gofiber/fiber/v2"
)

type SubmitResultPayload struct {
	Day      string `json:"day" xml:"day" form:"day"`
	Approval string `json:"approval" xml:"approval" form:"approval"`
	Period   string `json:"period" xml:"period" form:"period"`
}

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
	payload := new(SubmitResultPayload)
	if err := c.BodyParser(payload); err != nil {
		return response401(c, err)
	}

	// TODO logic
	return nil
}
