package controllers

import "github.com/gofiber/fiber/v2"
import "github.com/droidion/implementing-change/internal/auth"

type AuthRequestPayload struct {
	Pin string `json:"pin" xml:"pin" form:"pin"`
}

func response401(c *fiber.Ctx, err error) error {
	return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
		"error": true,
		"msg":   err.Error(),
	})
}

func AuthController(c *fiber.Ctx) error {
	payload := new(AuthRequestPayload)
	if err := c.BodyParser(payload); err != nil {
		return response401(c, err)
	}

	user, err := auth.AuthenticateUser(payload.Pin)
	if err != nil {
		return response401(c, err)
	}
	return c.JSON(&user)
}

func SubmitResultController(c *fiber.Ctx) error {
	return c.SendString("success")
}

func NotFoundControllers(c *fiber.Ctx) error {
	return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
		"error": true,
		"msg":   "endpoint is not found",
	})
}