package controllers

import "github.com/gofiber/fiber/v2"

// GenerateUsersController контроллер для генерации новой игры и пин-кодов игроков
func GenerateUsersController(c *fiber.Ctx) error {
	// TODO
	// Помечаем все игры как неактивные
	// Добавляем новую игру, помеченную как активную
	// Генерируем и добавляем новых пользователей
	return c.SendString("success")
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
