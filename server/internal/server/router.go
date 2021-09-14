package server

import (
	"github.com/droidion/implementing-change/internal/server/controllers"
	"github.com/gofiber/fiber/v2"
)

// Роутер

// addAuthRoutes регистрирует маршруты для авторизации без защиты JWT
func addAuthRoutes(app *fiber.App) {
	route := app.Group("/api/auth")
	route.Post("/player", controllers.AuthPlayerController)
	route.Post("/admin", controllers.AuthAdminController)
}

// addPlayerRoutes регистрирует маршруты для игроков, защищенные через JWT
func addPlayerRoutes(app *fiber.App) {
	route := app.Group("/api")
	route.Post("/log", JWTProtected(), controllers.SubmitResultController)
}

// addAdminRoutes регистрирует админские маршруты, защищенные через JWT
func addAdminRoutes(app *fiber.App) {
	route := app.Group("/api/admin")
	route.Post("/generate_players", JWTProtected(), controllers.GeneratePlayersController)
	route.Get("/stop_game", JWTProtected(), controllers.StopGameController)
	route.Get("/resume_game", JWTProtected(), controllers.ResumeGameController)
	route.Get("/game_results", JWTProtected(), controllers.GameResultsController)
	route.Get("/players", JWTProtected(), controllers.PlayersController)
}

// addServiceRoutes регистрирует обработчик для не найденной страницы
func addServiceRoutes(app *fiber.App) {
	app.Use(controllers.NotFoundControllers)
}

// addRoutes регистрирует маршруты и их обработчики
func addRoutes(app *fiber.App) {
	addAuthRoutes(app)
	addPlayerRoutes(app)
	addAdminRoutes(app)
	addServiceRoutes(app)
}
