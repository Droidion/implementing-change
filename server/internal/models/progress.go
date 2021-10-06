package models

import (
	"github.com/droidion/implementing-change/internal/utils"
	"github.com/rotisserie/eris"
)

// Бизнес-логика сущности Прогресс игры.
// Прогресс игры - это данные конкретной команды.

// Progress прогресс игры команды
type Progress struct {
	Day      int `json:"day" xml:"day" form:"day"`
	Approval int `json:"approval" xml:"approval" form:"approval"`
	Period   int `json:"period" xml:"period" form:"period"`
}

// InsertResult сохраняет в базу данных прогресс игры команды
func (result Progress) InsertResult(playerId int) error {
	const sql = `insert into progress (player_id, timestamp, day, approval, period) values ($1, now(), $2, $3, $4)`
	_, err := utils.PgConn.Exec(utils.Ctx, sql, playerId, result.Day, result.Approval, result.Period)
	if err != nil {
		return eris.Wrap(err, "error inserting player progress to db")
	}
	return nil
}
