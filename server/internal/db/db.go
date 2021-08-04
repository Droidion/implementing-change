package db

import (
	"context"
	"fmt"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/rotisserie/eris"
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
		fmt.Println(eris.ToString(err, true))
		os.Exit(1)
	}
}

















