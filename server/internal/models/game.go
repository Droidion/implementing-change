package models

import (
	"github.com/droidion/implementing-change/internal/db"
	"github.com/georgysavva/scany/pgxscan"
	"github.com/rotisserie/eris"
)

// Бизнес-логика сущности Игра

// CreateNewGame создает новую активную игру в базе
func CreateNewGame() (int, error) {
	var ids []int
	err := pgxscan.Select(db.Ctx, db.PgConn, &ids, `insert into games (creation_date, is_active) values (now(), true) returning id`)
	if err != nil {
		return 0, eris.Wrap(err, "could not insert new game")
	}

	return ids[0], nil
}

// SetAllGamesAsInactive помечает все существующие игры в базе как не активные
func SetAllGamesAsInactive() error {
	_, err := db.PgConn.Exec(db.Ctx, "update games set is_active = false")
	return err
}

// SetLatestGameAsActive помечает последнюю по дате создания игру в базе как активную
func SetLatestGameAsActive() error {
	_, err := db.PgConn.Exec(db.Ctx, "update games set is_active = true where id = (select id from games order by creation_date desc limit 1)")
	return err
}