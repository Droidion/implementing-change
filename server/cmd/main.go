package main

import (
	"github.com/droidion/implementing-change/internal/db"
	"github.com/droidion/implementing-change/internal/server"
	_ "github.com/joho/godotenv/autoload"
)

func main() {
	db.PostgresConnect()
	defer db.PgConn.Close()
	server.StartServer()
}