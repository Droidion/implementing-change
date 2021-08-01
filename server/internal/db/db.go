package db

import (
	"context"
	"fmt"
	"github.com/georgysavva/scany/pgxscan"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/rotisserie/eris"
	"os"
)

var Ctx = context.Background()

var PgConn *pgxpool.Pool

type User struct {
	Team    int `db:"team" json:"team"`
}

// PostgresConnect tries to connect to Postgres database
func PostgresConnect() {
	var err error
	PgConn, err = pgxpool.Connect(Ctx, os.Getenv("POSTGRES_URL"))
	if err != nil {
		fmt.Println(eris.ToString(err, true))
		os.Exit(1)
	}
}

// GetUserByPin searches for a user with a given pin code in a database
func GetUserByPin(pin string) (*User, error) {
	var users []*User
	err := pgxscan.Select(Ctx, PgConn, &users, `SELECT team FROM users WHERE pin=$1`, pin)
	if err != nil {
		return nil, eris.Wrap(err, "problem with querying user from a db")
	}
	if users == nil {
		return nil, eris.New("no users found in a db")
	}
	return users[0], nil
}