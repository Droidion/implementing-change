package controllers

import (
	"github.com/droidion/implementing-change/internal/auth"
	"github.com/gofiber/fiber/v2"
)

// AuthPlayerPayload тело запроса для получения JWT токена игроком
type AuthPlayerPayload struct {
	Pin string `json:"pin" xml:"pin" form:"pin"`
}

// AuthAdminPayload тело запроса для получения JWT токена админом
type AuthAdminPayload struct {
	Login string `json:"login" xml:"login" form:"login"`
	Password string `json:"password" xml:"password" form:"password"`
}

// AuthPlayerController контроллер для получения JWT токена игроком
func AuthPlayerController(c *fiber.Ctx) error {
	payload := new(AuthPlayerPayload)
	if err := c.BodyParser(payload); err != nil {
		return response401(c, err)
	}

	user, err := auth.AuthenticatePlayer(payload.Pin)
	if err != nil {
		return response401(c, err)
	}
	return c.JSON(&user)
}

// AuthAdminController контроллер для получения JWT токена админом
func AuthAdminController(c *fiber.Ctx) error {
	payload := new(AuthAdminPayload)
	if err := c.BodyParser(payload); err != nil {
		return response401(c, err)
	}

	user, err := auth.AuthenticateAdmin(payload.Login, payload.Password)
	if err != nil {
		return response401(c, err)
	}
	return c.JSON(&user)
}
