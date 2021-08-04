package server

import (
	controllers2 "github.com/droidion/implementing-change/internal/server/controllers"
	"github.com/gofiber/fiber/v2"
)

// Роутер

// addAuthRoutes регистрирует маршруты для авторизации без защиты JWT
func addAuthRoutes(app *fiber.App) {
	route := app.Group("/api/auth")
	route.Post("/player", controllers2.AuthPlayerController)
	route.Post("/admin", controllers2.AuthAdminController)
}

// addPlayerRoutes регистрирует маршруты для игроков, защищенные через JWT
func addPlayerRoutes(app *fiber.App) {
	route := app.Group("/api")
	route.Post("/log", JWTProtected(), controllers2.SubmitResultController)
}

// addAdminRoutes регистрирует админские маршруты, защищенные через JWT
func addAdminRoutes(app *fiber.App) {
	route := app.Group("/api/admin")
	route.Post("/generate_players", JWTProtected(), controllers2.GeneratePlayersController)
	route.Get("/stop_game", JWTProtected(), controllers2.StopGameController)
	route.Get("/resume_game", JWTProtected(), controllers2.ResumeGameController)
	route.Get("/game_results", JWTProtected(), controllers2.GameResultsController)
	route.Get("/players", JWTProtected(), controllers2.PlayersController)
}

// addServiceRoutes регистрирует обработчик для не найденной страницы
func addServiceRoutes(app *fiber.App) {
	app.Use(controllers2.NotFoundControllers)
}

// addRoutes регистрирует маршруты и их обработчики
func addRoutes(app *fiber.App) {
	addAuthRoutes(app)
	addPlayerRoutes(app)
	addAdminRoutes(app)
	addServiceRoutes(app)
}
