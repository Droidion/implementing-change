package models

import (
	"github.com/droidion/implementing-change/internal/utils"
	"github.com/georgysavva/scany/pgxscan"
	"github.com/rotisserie/eris"
)

// Бизнес-логика сущности Игрок.

// PlayerBrief Краткая информация об игроке, доступная самому игроку
type PlayerBrief struct {
	Team     int `db:"team" json:"team"`
	PlayerId int `db:"player_id" json:"playerId"`
}

// PlayerFull Полная информация об игроке, доступная админу
type PlayerFull struct {
	PlayerBrief
	GameId int    `db:"game_id" json:"gameId"`
	Pin    string `db:"pin" json:"pin"`
}

// PlayerGenerated Новый сгенерированный игрок. Не имеет player id, потому что еще не был положен в базу
type PlayerGenerated struct {
	Team   int    `db:"team" json:"team"`
	GameId int    `db:"game_id" json:"gameId"`
	Pin    string `db:"pin" json:"pin"`
}

// PlayerAuthenticated данные авторизованного игрока
type PlayerAuthenticated struct {
	Team  int    `json:"team"`
	Token string `json:"token"`
}

// AuthenticatePlayer пытается авторизовать игрока и сгенерировать для него JWT токен
func AuthenticatePlayer(pin string) (*PlayerAuthenticated, error) {
	player, err := GetPlayerByPin(pin)
	if err != nil {
		return nil, eris.Wrap(err, "error finding player by pin in db")
	}
	token, err := GenerateNewAccessToken(player.PlayerId, player.Team, "player")
	if err != nil {
		return nil, eris.Wrap(err, "error generating new access token")
	}
	authUser := PlayerAuthenticated{Team: player.Team, Token: token}
	err = LogSignIn(player)
	if err != nil {
		return nil, eris.Wrap(err, "error logging user login")
	}
	return &authUser, nil
}

// GeneratePlayers генерирует указанное количество команд игроков и их пин-кодов с привязкой к указанной игре
func GeneratePlayers(teamCount int, gameId int) []PlayerGenerated {
	teams := make([]PlayerGenerated, teamCount)
	for i := 0; i < teamCount; i++ {
		pin, err := GeneratePin(6)
		if err != nil {
			pin = ""
		}
		teams[i] = PlayerGenerated{
			Team:   i + 1,
			GameId: gameId,
			Pin:    pin,
		}
	}
	return teams
}

// GetPlayerByPin ищет в базе команду по ее пин-коду
func GetPlayerByPin(pin string) (*PlayerBrief, error) {
	const sql = `SELECT players.team, players.id AS player_id FROM players JOIN games ON games.id = players.game_id AND games.is_active = true WHERE players.pin=$1`
	var players []*PlayerBrief
	err := pgxscan.Select(utils.Ctx, utils.PgConn, &players, sql, pin)
	if err != nil {
		return nil, eris.Wrap(err, "error getting player from a db")
	}
	if players == nil {
		return nil, eris.New("no player found in db with given pin")
	}
	return players[0], nil
}

// InsertPlayers добавляет в базу игроков
func InsertPlayers(teams []PlayerGenerated) error {
	const sql = `insert into players (team, game_id, pin) values ($1, $2, $3)`
	for i := 0; i < len(teams); i++ {
		_, err := utils.PgConn.Exec(utils.Ctx, sql, teams[i].Team, teams[i].GameId, teams[i].Pin)
		if err != nil {
			return eris.Wrap(err, "error inserting new game to db")
		}
	}
	return nil
}

// GetPlayers возвращает из базы список игроков
func GetPlayers() (*[]PlayerFull, error) {
	const sql = `
select p.id player_id, p.team, p.pin, g.id game_id
from players p join games g on p.game_id = g.id
where g.is_active = true
order by p.team
`
	var players []PlayerFull
	err := pgxscan.Select(utils.Ctx, utils.PgConn, &players, sql)
	if err != nil {
		return nil, eris.Wrap(err, "error getting list of players from db")
	}

	return &players, nil
}
