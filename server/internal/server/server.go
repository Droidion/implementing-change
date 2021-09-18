package server

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"log"
	"os"
)

// Функции для работы с веб-сервером

// StartServer стартует веб-сервер fiber
func StartServer() {
	app := fiber.New()
	app.Use(recover.New())
	app.Use(cors.New())
	addRoutes(app)
	log.Fatal(app.Listen(":" + os.Getenv("SERVER_PORT")))
}
