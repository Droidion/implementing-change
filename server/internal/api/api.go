package api

import "github.com/gofiber/fiber/v2"

func ExampleHandler(c *fiber.Ctx) error {
	return c.SendString("Hello, World 👋!")
}