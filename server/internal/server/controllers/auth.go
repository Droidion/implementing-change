package controllers

import (
	"github.com/droidion/implementing-change/internal/models"
	"github.com/gofiber/fiber/v2"
	"github.com/rs/zerolog/log"
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
		log.Error().Err(err).Msg("HTTP Bad Request. Incorrect request body")
		return c.Status(fiber.StatusBadRequest).SendString("Incorrect request body")
	}
	// Валидируем пользователя по пин-коду
	player, err := models.AuthenticatePlayer(payload.Pin)
	if err != nil {
		log.Error().Err(err).Msg("HTTP Unauthorized. Player not recognized")
		return c.Status(fiber.StatusUnauthorized).SendString("Player not recognized")
	}
	// Отправляем
	return c.JSON(&player)
}

// AuthAdminController контроллер для получения JWT токена админом
func AuthAdminController(c *fiber.Ctx) error {
	// Извлекаем параметры тела запроса
	payload := new(AuthAdminPayload)
	if err := c.BodyParser(payload); err != nil {
		log.Error().Err(err).Msg("HTTP Bad Request. Incorrect request body")
		return c.Status(fiber.StatusBadRequest).SendString("Incorrect request body")
	}
	// Валидируем админа
	user, err := models.AuthenticateAdmin(payload.Login, payload.Password)
	if err != nil {
		log.Error().Err(err).Msg("HTTP Unauthorized. Admin not recognized")
		return c.Status(fiber.StatusUnauthorized).SendString("Admin not recognized")
	}
	return c.JSON(&user)
}
