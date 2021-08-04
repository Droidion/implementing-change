package controllers

import (
	"github.com/droidion/implementing-change/internal/models"
	"github.com/gofiber/fiber/v2"
)

// Контроллеры для аутентификации и получения токена

// AuthPlayerPayload тело запроса для получения JWT токена игроком
type AuthPlayerPayload struct {
	Pin string `json:"pin" xml:"pin" form:"pin"`
}

// AuthAdminPayload тело запроса для получения JWT токена админом
type AuthAdminPayload struct {
	Login    string `json:"login" xml:"login" form:"login"`
	Password string `json:"password" xml:"password" form:"password"`
}

// AuthPlayerController контроллер для получения JWT токена игроком
func AuthPlayerController(c *fiber.Ctx) error {
	// Извлекаем параметры тела запроса
	payload := new(AuthPlayerPayload)
	if err := c.BodyParser(payload); err != nil {
		return response401(c, err)
	}
	// Валидируем пользователя по пин-коду
	user, err := models.AuthenticatePlayer(payload.Pin)
	if err != nil {
		return response401(c, err)
	}
	// Отправляем
	return c.JSON(&user)
}

// AuthAdminController контроллер для получения JWT токена админом
func AuthAdminController(c *fiber.Ctx) error {
	// Извлекаем параметры тела запроса
	payload := new(AuthAdminPayload)
	if err := c.BodyParser(payload); err != nil {
		return response401(c, err)
	}

	user, err := models.AuthenticateAdmin(payload.Login, payload.Password)
	if err != nil {
		return response401(c, err)
	}
	return c.JSON(&user)
}
