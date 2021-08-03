package server

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"log"
)

// StartServer стартует веб-сервер fiber
func StartServer() {
	app := fiber.New()
	app.Use(recover.New())
	addRoutes(app)
	log.Fatal(app.Listen(":3000"))
}
