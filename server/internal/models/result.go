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
	Team  int `json:"team"`
	Tries int `json:"tries"`
}

// GetCurrentResults возвращает из базы результаты игры все команд
func GetCurrentResults() (*[]Result, error) {
	const sql = `
select pl.team, pr.day, pr.approval, pr.period, count(s.id) tries
from progress pr
         join players pl on pr.player_id = pl.id
         join games g on pl.game_id = g.id
         left join signins s on pl.id = s.player_id
where g.is_active = true
group by pl.team, pr.day, pr.approval, pr.period
order by pl.team
`
	results := make([]Result, 0)
	err := pgxscan.Select(utils.Ctx, utils.PgConn, &results, sql)
	if err != nil {
		return nil, eris.Wrap(err, "error getting game results from db")
	}
	return &results, nil
}
