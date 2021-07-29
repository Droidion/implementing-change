package server

import "github.com/gofiber/fiber/v2"
import "github.com/droidion/implementing-change/internal/api"

func StartServer() {
	app := fiber.New()
	app.Get("/", api.ExampleHandler)
	app.Listen(":3000")
}