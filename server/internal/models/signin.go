package models

import (
	"github.com/droidion/implementing-change/internal/utils"
	"github.com/rotisserie/eris"
)

// Бизнес-логика сущности Заход в игру.

// LogSignIn сохраняет в базу время захода пользователя в игру.
// Под заходом в игру понимается авторизация в системе и получение токена игрока.
func LogSignIn(player *PlayerBrief) error {
	const sql = `insert into signins (player_id, timestamp) values ($1, now())`
	_, err := utils.PgConn.Exec(utils.Ctx, sql, player.PlayerId)
	if err != nil {
		return eris.Wrap(err, "error inserting player sign in event to db")
	}
	return nil
}
