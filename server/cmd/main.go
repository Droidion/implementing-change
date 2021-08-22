package main

import (
	"github.com/droidion/implementing-change/internal/server"
	"github.com/droidion/implementing-change/internal/utils"
	_ "github.com/joho/godotenv/autoload"
	"github.com/rs/zerolog"
)

var logger zerolog.Logger

func main() {
	// Инициализация логинга
	utils.InitLogger()
	// Пул соединений с базой
	utils.PostgresConnect()
	defer utils.PgConn.Close()
	// Стартуем сервер
	server.StartServer()
}