package server

import (
	"github.com/droidion/implementing-change/internal/controllers"
	"github.com/gofiber/fiber/v2"
	"log"
)

func addPublicRoutes(app *fiber.App) {
	route := app.Group("/api")
	route.Post("/auth", controllers.AuthController)
}

func addPrivateRoutes(app *fiber.App) {
	route := app.Group("/api")
	route.Get("/test", JWTProtected(), controllers.SubmitResultController)
}

// NotFoundRoute func for describe 404 Error route.
func addServiceRoutes(a *fiber.App) {
	a.Use(controllers.NotFoundControllers)
}

func StartServer() {
	app := fiber.New()
	addPublicRoutes(app)
	addPrivateRoutes(app)
	addServiceRoutes(app)
	log.Fatal(app.Listen(":3000"))
}