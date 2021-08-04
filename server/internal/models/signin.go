package models

import (
	"github.com/droidion/implementing-change/internal/db"
	"github.com/rotisserie/eris"
)

// Бизнес-логика сущности Заход в игру.

// LogSignIn сохраняет в базу время захода пользователя в игру.
// Под заходом в игру понимается авторизация в системе и получение токена игрока.
func LogSignIn(user *PlayerBrief) error {
	_, err := db.PgConn.Exec(db.Ctx, `insert into signins (user_id, timestamp) values ($1, now())`, user.UserId)
	if err != nil {
		return eris.Wrap(err, "could not log user signin")
	}
	return nil
}