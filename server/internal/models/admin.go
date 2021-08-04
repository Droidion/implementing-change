package models

import (
	"github.com/droidion/implementing-change/internal/utils"
	"github.com/georgysavva/scany/pgxscan"
	"github.com/rotisserie/eris"
)

// Бизнес-логика сущности Админ.

// AuthenticatedAdmin данные авторизованного админа, которые можно вернуть клиенту
type AuthenticatedAdmin struct {
	Login string `json:"login"`
	Name  string `json:"name"`
	Token string `json:"token"`
}

// Admin данные об админе из базы, для внутреннего пользования
type Admin struct {
	Name     string `db:"name" json:"name"`
	Login    string `db:"login" json:"login"`
	Password string `db:"password" json:"password"`
}

// AuthenticateAdmin пытается авторизовать админа и сгенерировать для него токен
func AuthenticateAdmin(login string, password string) (*AuthenticatedAdmin, error) {
	admin, err := GetAdminByLogin(login)
	if err != nil {
		return nil, eris.Wrap(err, "error getting admin by login")
	}

	err = CompareHashAndPassword(admin.Password, password)
	if err != nil {
		return nil, eris.Wrap(err, "error while comparing hash and password")
	}

	token, err := GenerateNewAccessToken(0, 0, "admin")
	if err != nil {
		return nil, eris.Wrap(err, "error generating new token")
	}

	authUser := AuthenticatedAdmin{Login: admin.Login, Name: admin.Name, Token: token}
	return &authUser, nil
}

// GetAdminByLogin возвращает из базы данные об админе по его логину
func GetAdminByLogin(login string) (*Admin, error) {
	const sql = `SELECT name, login, password FROM admins WHERE login=$1`
	var admins []*Admin
	err := pgxscan.Select(utils.Ctx, utils.PgConn, &admins, sql, login)
	if err != nil {
		return nil, eris.Wrap(err, "error getting admin from db")
	}
	if admins == nil {
		return nil, eris.New("no admin with given login found in db")
	}
	return admins[0], nil
}