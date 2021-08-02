package controllers

import (
	"fmt"
	"github.com/droidion/implementing-change/internal/db"
	"github.com/gofiber/fiber/v2"
)

// GenerateUsersController контроллер для генерации новой игры и пин-кодов игроков
func GenerateUsersController(c *fiber.Ctx) error {
	err := db.SetAllGamesAsInactive()
	if err != nil {
		return response401(c, err)
	}

	gameId, err := db.CreateNewGame()
	if err != nil {
		return response401(c, err)
	}

	// TODO
	// Генерируем и добавляем новых пользователей

	return c.SendString(fmt.Sprintf("id is %d", gameId))
}

// StopGameController контроллер для приостановки игры
func StopGameController(c *fiber.Ctx) error {
	return c.SendString("success")
}

// ResumeGameController контроллер для возобновления игры
func ResumeGameController(c *fiber.Ctx) error {
	return c.SendString("success")
}

// GameResultsController контроллер для получения результатов игры
func GameResultsController(c *fiber.Ctx) error {
	return c.SendString("success")
}
