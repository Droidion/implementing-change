package controllers

import (
	"github.com/droidion/implementing-change/internal/models"
	"github.com/gofiber/fiber/v2"
	"github.com/rotisserie/eris"
	"github.com/rs/zerolog/log"
)

// Админские контроллеры

// GeneratePlayersPayload тело запроса на создание новой игры и пин-кодов игроков
type GeneratePlayersPayload struct {
	// Количество команд, для которых нужно создать новую игру и сгенерировать пин-коды
	TeamsCount int `json:"teamsCount" xml:"teamsCount" form:"teamsCount"`
}

// GeneratePlayersController контроллер для генерации новой игры и пин-кодов игроков
func GeneratePlayersController(c *fiber.Ctx) error {
	// Проверяем что админ
	if checkAdmin(c) != nil {
		log.Error().Msg("HTTP Unauthorized. Could not confirm admin role")
		return c.Status(fiber.StatusUnauthorized).SendString("Could not confirm admin role")
	}
	// Достаем и проверяем тело запроса
	payload := new(GeneratePlayersPayload)
	if err := c.BodyParser(payload); err != nil {
		log.Error().Msg("HTTP Unauthorized. Could not extract token data")
		return c.Status(fiber.StatusUnauthorized).SendString("Could not extract token data")
	}
	// Помечаем все игры в базе как неактивные
	err := models.SetAllGamesAsInactive()
	if err != nil {
		log.Error().Err(err).Msg("HTTP Internal Server Error. Could not mark all games as inactive in db")
		return c.Status(fiber.StatusInternalServerError).SendString("Could not mark all games as inactive in db")
	}
	// Создаем новую активную игру
	gameId, err := models.CreateNewGame()
	if err != nil {
		log.Error().Err(err).Msg("HTTP Internal Server Error. Could not create new active game in db")
		return c.Status(fiber.StatusInternalServerError).SendString("Could not create new active game in db")
	}
	// Генерируем команды с новыми пин-кодами и привязываем их к активной игре
	teams := models.GeneratePlayers(payload.TeamsCount, gameId)
	// Сохраняем новые команды в базу
	err = models.InsertPlayers(teams)
	if err != nil {
		log.Error().Err(err).Msg("HTTP Internal Server Error. Could not save new players to db")
		return c.Status(fiber.StatusInternalServerError).SendString("Could not save new players to db")
	}
	// http ответ с успехом
	return c.SendStatus(fiber.StatusOK)
}

// StopGameController контроллер для приостановки игры
func StopGameController(c *fiber.Ctx) error {
	// Проверяем что админ
	if checkAdmin(c) != nil {
		log.Error().Msg("HTTP Unauthorized. Could not confirm admin role")
		return c.Status(fiber.StatusUnauthorized).SendString("Could not confirm admin role")
	}
	// Помечаем все игры как неактивные
	err := models.SetAllGamesAsInactive()
	if err != nil {
		log.Error().Err(err).Msg("HTTP Internal Server Error. Could not mark all games as inactive in db")
		return c.Status(fiber.StatusInternalServerError).SendString("Could not mark all games as inactive in db")
	}
	// http ответ с успехом
	return c.SendStatus(fiber.StatusOK)
}

// ResumeGameController контроллер для возобновления игры
func ResumeGameController(c *fiber.Ctx) error {
	// Проверяем что админ
	if checkAdmin(c) != nil {
		log.Error().Msg("HTTP Unauthorized. Could not confirm admin role")
		return c.Status(fiber.StatusUnauthorized).SendString("Could not confirm admin role")
	}
	// Помечаем все игры как неактивные
	err := models.SetAllGamesAsInactive()
	if err != nil {
		log.Error().Err(err).Msg("HTTP Internal Server Error. Could not mark all games as inactive in db")
		return c.Status(fiber.StatusInternalServerError).SendString("Could not mark all games as inactive in db")
	}
	// Помечаем последнюю по дате создания игру как активную
	err = models.SetLatestGameAsActive()
	if err != nil {
		log.Error().Err(err).Msg("HTTP Internal Server Error. Could not set game as active in db")
		return c.Status(fiber.StatusInternalServerError).SendString("Could not set game as active in db")
	}
	// http ответ с успехом
	return c.SendStatus(fiber.StatusOK)
}

// GameResultsController контроллер для получения результатов игры
func GameResultsController(c *fiber.Ctx) error {
	// Проверяем что админ
	if checkAdmin(c) != nil {
		log.Error().Msg("HTTP Unauthorized. Could not confirm admin role")
		return c.Status(fiber.StatusUnauthorized).SendString("Could not confirm admin role")
	}
	// Получаем из базы результаты игры
	results, err := models.GetCurrentResults()
	if err != nil {
		log.Error().Err(err).Msg("HTTP Internal Server Error. Could not get game results from db")
		return c.Status(fiber.StatusInternalServerError).SendString("Could not get game results from db")
	}
	// Отправляем результаты в http ответе
	return c.JSON(results)
}

// PlayersController контроллер для получения админом списка пользователей
func PlayersController(c *fiber.Ctx) error {
	// Проверяем что админ
	if checkAdmin(c) != nil {
		log.Error().Msg("HTTP Unauthorized. Could not confirm admin role")
		return c.Status(fiber.StatusUnauthorized).SendString("Could not confirm admin role")
	}
	// Получаем из базы список пользователей по активной игре
	players, err := models.GetPlayers()
	if err != nil {
		log.Error().Err(err).Msg("HTTP Internal Server Error. Could not get players from db")
		return c.Status(fiber.StatusInternalServerError).SendString("Could not get players from db")
	}
	// Отправляем пользователей в http ответе
	return c.JSON(players)
}

// checkAdmin проверяет, что в токене указана роль админа
func checkAdmin(c *fiber.Ctx) error {
	// Извлекаем все данные из токена
	tokenMeta, err := models.ExtractTokenMetadata(c)
	if err != nil {
		log.Error().Msg("Could not extract token data")
		return eris.Wrap(err, "Could not extract token data")
	}
	// Проверяем что роль админ
	if tokenMeta.Role != "admin" {
		log.Error().Msg("Incorrect admin role in token")
		return eris.Wrap(err, "Incorrect admin role in token")
	}
	return nil
}
