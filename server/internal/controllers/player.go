package controllers

import "github.com/gofiber/fiber/v2"

// SubmitResultController контроллер для логирования результатов обсчета события командой
func SubmitResultController(c *fiber.Ctx) error {
	return c.SendString("success")
}

