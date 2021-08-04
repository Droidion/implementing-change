package controllers

import (
	"github.com/droidion/implementing-change/internal/models"
	"github.com/gofiber/fiber/v2"
)

// Админские контроллеры

// GenerateUsersPayload тело запроса на создание новой игры и пин-кодов игроков
type GenerateUsersPayload struct {
	// Количество команд, для которых нужно создать новую игру и сгенерировать пин-коды
	TeamsCount int `json:"teamsCount" xml:"teamsCount" form:"teamsCount"`
}

// GenerateUsersController контроллер для генерации новой игры и пин-кодов игроков
func GenerateUsersController(c *fiber.Ctx) error {
	// Проверяем что админ
	_ = checkAdmin(c)
	// Достаем и проверяем тело запроса
	payload := new(GenerateUsersPayload)
	if err := c.BodyParser(payload); err != nil {
		return response400(c, err)
	}
	// Помечаем все игры в базе как неактивные
	err := models.SetAllGamesAsInactive()
	if err != nil {
		return response401(c, err)
	}
	// Создаем новую активную игру
	gameId, err := models.CreateNewGame()
	if err != nil {
		return response401(c, err)
	}
	// Генерируем команды с новыми пин-кодами и привязываем их к активной игре
	teams := models.GeneratePlayers(payload.TeamsCount, gameId)
	// Сохраняем новые команды в базу
	err = models.InsertPlayers(teams)
	if err != nil {
		return response400(c, err)
	}
	// http ответ с успехом
	return c.SendStatus(fiber.StatusOK)
}

// StopGameController контроллер для приостановки игры
func StopGameController(c *fiber.Ctx) error {
	// Проверяем что админ
	_ = checkAdmin(c)
	// Помечаем все игры как неактивные
	err := models.SetAllGamesAsInactive()
	if err != nil {
		return err
	}
	// http ответ с успехом
	return c.SendStatus(fiber.StatusOK)
}

// ResumeGameController контроллер для возобновления игры
func ResumeGameController(c *fiber.Ctx) error {
	// Проверяем что админ
	_ = checkAdmin(c)
	// Помечаем все игры как неактивные
	err := models.SetAllGamesAsInactive()
	if err != nil {
		return err
	}
	// Помечаем последнюю по дате создания игру как активную
	err = models.SetLatestGameAsActive()
	if err != nil {
		return err
	}
	// http ответ с успехом
	return c.SendStatus(fiber.StatusOK)
}

// GameResultsController контроллер для получения результатов игры
func GameResultsController(c *fiber.Ctx) error {
	// Проверяем что админ
	_ = checkAdmin(c)
	// Получаем из базы результаты игры
	results, err := models.GetCurrentResults()
	if err != nil {
		return err
	}
	// Отправляем результаты в http ответе
	return c.JSON(results)
}

// UsersController контроллер для получения админом списка пользователей
func UsersController(c *fiber.Ctx) error {
	// Проверяем что админ
	_ = checkAdmin(c)
	// Получаем из базы список пользователей по активной игре
	users, err := models.GetPlayers()
	if err != nil {
		return err
	}
	// Отправляем пользователей в http ответе
	return c.JSON(users)
}

// checkAdmin проверяет, что в токене указана роль админа и выдает статус 401, если нет
func checkAdmin(c *fiber.Ctx) error {
	tokenMeta, err := models.ExtractTokenMetadata(c)
	if err != nil {
		return response401(c, err)
	}
	if tokenMeta.Role != "admin" {
		return c.SendStatus(fiber.StatusUnauthorized)
	}
	return nil
}
