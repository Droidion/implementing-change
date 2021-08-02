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

// User информация о команде, возвращаемая из базы
type User struct {
	Team    int `db:"team" json:"team"`
}

type Admin struct {
	Name    string `db:"name" json:"name"`
	Login    string `db:"login" json:"login"`
	Password    string `db:"password" json:"password"`
}

type Progress struct {
	UserId int

}

// PostgresConnect поднимает пул соединений с базой
func PostgresConnect() {
	var err error
	PgConn, err = pgxpool.Connect(Ctx, os.Getenv("POSTGRES_URL"))
	if err != nil {
		fmt.Println(eris.ToString(err, true))
		os.Exit(1)
	}
}

// GetUserByPin ищет в базе команду по ее пин-коду
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

func GetAdminByLogin(login string) (*Admin, error) {
	var admins []*Admin
	err := pgxscan.Select(Ctx, PgConn, &admins, `SELECT name, login, password FROM admins WHERE login=$1`, login)
	if err != nil {
		return nil, eris.Wrap(err, "problem with querying admin from a db")
	}
	if admins == nil {
		return nil, eris.New("no admins found in a db")
	}
	return admins[0], nil
}