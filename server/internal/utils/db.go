package utils

import (
	"context"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/rs/zerolog/log"
	"os"
)

// Общие операции с базой данных

var Ctx = context.Background()

// PgConn пул соединений с базой Postgres
var PgConn *pgxpool.Pool

// PostgresConnect создает пул соединений с базой Postgres
func PostgresConnect() {
	var err error
	PgConn, err = pgxpool.Connect(Ctx, os.Getenv("POSTGRES_URL"))
	if err != nil {
		log.Fatal().Err(err).Msg("Could not establish DB Connection")
		os.Exit(1)
	}
}

