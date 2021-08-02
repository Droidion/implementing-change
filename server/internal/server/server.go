package server

import (
	"github.com/gofiber/fiber/v2"
	"log"
)

// StartServer стартует веб-сервер fiber
func StartServer() {
	app := fiber.New()
	addRoutes(app)
	log.Fatal(app.Listen(":3000"))
}
