package controllers

import (
	"github.com/droidion/implementing-change/internal/auth"
	"github.com/droidion/implementing-change/internal/db"
	"github.com/droidion/implementing-change/internal/utils"
	"github.com/gofiber/fiber/v2"
)

type GenerateUsers struct {
	TeamsCount      int `json:"teamsCount" xml:"teamsCount" form:"teamsCount"`
}

func checkAdmin(c *fiber.Ctx) error {
	tokenMeta, err := auth.ExtractTokenMetadata(c)
	if err != nil {
		return response401(c, err)
	}

	if tokenMeta.Role != "admin" {
		return c.SendStatus(fiber.StatusUnauthorized)
	}

	return nil
}

// GenerateUsersController контроллер для генерации новой игры и пин-кодов игроков
func GenerateUsersController(c *fiber.Ctx) error {
	_ = checkAdmin(c)

	payload := new(GenerateUsers)
	if err := c.BodyParser(payload); err != nil {
		return response400(c, err)
	}

	err := db.SetAllGamesAsInactive()
	if err != nil {
		return response401(c, err)
	}

	gameId, err := db.CreateNewGame()
	if err != nil {
		return response401(c, err)
	}

	teams := utils.GenerateTeams(payload.TeamsCount, gameId)

	err = db.InsertTeams(teams)
	if err != nil {
		return response400(c, err)
	}

	return c.SendStatus(fiber.StatusOK)
}

// StopGameController контроллер для приостановки игры
func StopGameController(c *fiber.Ctx) error {
	_ = checkAdmin(c)
	err := db.SetAllGamesAsInactive()
	if err != nil {
		return err
	}
	return c.SendStatus(fiber.StatusOK)
}

// ResumeGameController контроллер для возобновления игры
func ResumeGameController(c *fiber.Ctx) error {
	_ = checkAdmin(c)
	err := db.SetAllGamesAsInactive()
	if err != nil {
		return err
	}
	err = db.SetLatestGameAsActive()
	if err != nil {
		return err
	}
	return c.SendString("success")
}

// GameResultsController контроллер для получения результатов игры
func GameResultsController(c *fiber.Ctx) error {
	_ = checkAdmin(c)
	results, err := db.GetCurrentResults()
	if err != nil {
		return err
	}
	return c.JSON(results)
}

func UsersController(c *fiber.Ctx) error {
	_ = checkAdmin(c)
	users, err := db.GetUsers()
	if err != nil {
		return err
	}
	return c.JSON(users)
}
