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
	Team int `db:"team" json:"team"`
	UserId int `db:"user_id" json:"userId"`
}

type UserFull struct {
	UserId int `db:"id" json:"userId"`
	Team int `db:"team" json:"team"`
	Pin string `db:"pin" json:"pin"`
}


type Admin struct {
	Name     string `db:"name" json:"name"`
	Login    string `db:"login" json:"login"`
	Password string `db:"password" json:"password"`
}

type Progress struct {
	UserId int
}

type Team struct {
	Team int `db:"team" json:"team"`
	GameId int `db:"game_id" json:"gameId"`
	Pin string `db:"pin" json:"pin"`
}

type UserProgress struct {
	Day      int `json:"day" xml:"day" form:"day"`
	Approval int `json:"approval" xml:"approval" form:"approval"`
	Period   int `json:"period" xml:"period" form:"period"`
}

type GameProgress struct {
	Team int `json:"team"`
	Day int `json:"day"`
	Approval int `json:"approval"`
	Period int `json:"period"`
	Tries int `json:"tries"`
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
	err := pgxscan.Select(Ctx, PgConn, &users, `SELECT users.team, users.id AS user_id FROM users JOIN games ON games.id = users.game_id AND games.is_active = true WHERE users.pin=$1`, pin)
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

func SetAllGamesAsInactive() error {
	_, err := PgConn.Exec(Ctx, "update games set is_active = false")
	return err
}

func SetLatestGameAsActive() error {
	_, err := PgConn.Exec(Ctx, "update games set is_active = true where id = (select id from games order by creation_date desc limit 1)")
	return err
}

func CreateNewGame() (int, error) {
	var ids []int
	err := pgxscan.Select(Ctx, PgConn, &ids, `insert into games (creation_date, is_active) values (now(), true) returning id`)
	if err != nil {
		return 0, eris.Wrap(err, "could not insert new game")
	}

	return ids[0], nil
}

func InsertTeams(teams []Team) error {
	for i := 0; i < len(teams); i++ {
		_, err := PgConn.Exec(Ctx, `insert into users (team, game_id, pin) values ($1, $2, $3)`, teams[i].Team, teams[i].GameId, teams[i].Pin)
		if err != nil {
			return eris.Wrap(err, "could not insert new game")
		}
	}

	return nil
}

func LogSignIn(user *User) error {
	_, err := PgConn.Exec(Ctx, `insert into signins (user_id, timestamp) values ($1, now())`, user.UserId)
	if err != nil {
		return eris.Wrap(err, "could not log user signin")
	}
	return nil
}

func InsertResult(userId int, result *UserProgress) error {
	_, err := PgConn.Exec(Ctx, `insert into progress (user_id, timestamp, day, approval, period) values ($1, now(), $2, $3, $4)`, userId, result.Day, result.Approval, result.Period)
	if err != nil {
		return eris.Wrap(err, "could not log user signin")
	}
	return nil
}

func GetCurrentResults() (*[]GameProgress, error) {
	const req = `
select u.team, p.day, p.approval, p.period, count(s.id) tries
from progress p
         join users u on p.user_id = u.id
         join games g on u.game_id = g.id
         left join signins s on u.id = s.user_id
where g.is_active = true
group by u.team, p.day, p.approval, p.period
order by u.team
`
	var results []GameProgress
	err := pgxscan.Select(Ctx, PgConn, &results, req)
	if err != nil {
		return nil, eris.Wrap(err, "could not find data")
	}

	return &results, nil
}

func GetUsers() (*[]UserFull, error) {
	const req = `
select u.id, u.team, u.pin
from users u join games g on u.game_id = g.id
where g.is_active = true
order by u.team
`
	var users []UserFull
	err := pgxscan.Select(Ctx, PgConn, &users, req)
	if err != nil {
		return nil, eris.Wrap(err, "could not find data")
	}

	return &users, nil
}