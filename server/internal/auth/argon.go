package auth

import (
	"github.com/alexedwards/argon2id"
	"github.com/rotisserie/eris"
)

// EncryptPassword encrypts plain password using argon2id
func EncryptPassword(plainPassword string) (string, error) {
	hash, err := argon2id.CreateHash(plainPassword, argon2id.DefaultParams)
	if err != nil {
		return "", eris.Wrap(err, "could not encrypt password")
	}
	return string(hash), nil
}

// CompareHashAndPassword checks if hashed password is the same as plain password
func CompareHashAndPassword(hash string, plain string) error {
	_, err := argon2id.ComparePasswordAndHash(plain, hash)
	if err != nil {
		return eris.Wrap(err, "passwords do not match")
	}
	return nil
}
