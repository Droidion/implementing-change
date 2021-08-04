package controllers

import "github.com/gofiber/fiber/v2"

// Вспомогательные функции контроллеров

// response401 содержание ответа для не найденной страницы
func response401(c *fiber.Ctx, err error) error {
	return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
		"error": true,
		"msg":   err.Error(),
	})
}

func response400(c *fiber.Ctx, err error) error {
	return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
		"error": true,
		"msg":   err.Error(),
	})
}

// NotFoundControllers контроллер для не найденного пути
func NotFoundControllers(c *fiber.Ctx) error {
	return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
		"error": true,
		"msg":   "endpoint is not found",
	})
}
