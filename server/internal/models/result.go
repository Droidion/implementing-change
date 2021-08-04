package models

import (
	"github.com/droidion/implementing-change/internal/utils"
	"github.com/georgysavva/scany/pgxscan"
	"github.com/rotisserie/eris"
)

// Бизнес-логика сущности Результат Игры.
// Результат игры - это прогресс всех команд и дополнительная статистика количества попыток.

// Result результат игры команды
type Result struct {
	Progress
	Team int `json:"team"`
	Tries int `json:"tries"`
}

// GetCurrentResults возвращает из базы результаты игры все команд
func GetCurrentResults() (*[]Result, error) {
	const sql = `
select u.team, p.day, p.approval, p.period, count(s.id) tries
from progress p
         join users u on p.user_id = u.id
         join games g on u.game_id = g.id
         left join signins s on u.id = s.user_id
where g.is_active = true
group by u.team, p.day, p.approval, p.period
order by u.team
`
	var results []Result
	err := pgxscan.Select(utils.Ctx, utils.PgConn, &results, sql)
	if err != nil {
		return nil, eris.Wrap(err, "error getting game results from db")
	}
	return &results, nil
}