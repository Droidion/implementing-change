package server

import (
	"github.com/droidion/implementing-change/internal/controllers"
	"github.com/gofiber/fiber/v2"
)

// addPublicRoutes регистрирует маршруты без защиты JWT (маршруты для получения JWT)
func addAuthRoutes(app *fiber.App) {
	route := app.Group("/api/auth")
	route.Post("/player", controllers.AuthPlayerController)
	route.Post("/admin", controllers.AuthAdminController)
}

// addPrivateRoutes регистрирует маршруты для игроков, защищенные через JWT
func addPlayerRoutes(app *fiber.App) {
	route := app.Group("/api")
	route.Post("/log", JWTProtected(), controllers.SubmitResultController)
}

// addAdminRoutes регистрирует админские маршруты, защищенные через JWT
func addAdminRoutes(app *fiber.App) {
	route := app.Group("/api/admin")
	route.Post("/generate_users", JWTProtected(), controllers.GenerateUsersController)
	route.Get("/stop_game", JWTProtected(), controllers.StopGameController)
	route.Get("/resume_game", JWTProtected(), controllers.ResumeGameController)
	route.Get("/game_results", JWTProtected(), controllers.GameResultsController)
	route.Get("/users", JWTProtected(), controllers.UsersController)
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
