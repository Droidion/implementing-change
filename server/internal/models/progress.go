package models

import (
	"github.com/droidion/implementing-change/internal/db"
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
func InsertResult(userId int, result *Progress) error {
	_, err := db.PgConn.Exec(db.Ctx, `insert into progress (user_id, timestamp, day, approval, period) values ($1, now(), $2, $3, $4)`, userId, result.Day, result.Approval, result.Period)
	if err != nil {
		return eris.Wrap(err, "could not log user signin")
	}
	return nil
}
