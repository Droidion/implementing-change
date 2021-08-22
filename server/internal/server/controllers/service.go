package controllers

import "github.com/gofiber/fiber/v2"

// Вспомогательные контроллеры

// NotFoundControllers контроллер для не найденного пути
func NotFoundControllers(c *fiber.Ctx) error {
	return c.Status(fiber.StatusNotFound).SendString("Endpoint not found")
}
