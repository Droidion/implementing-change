package models

import (
	"crypto/rand"
	"github.com/alexedwards/argon2id"
	"github.com/rotisserie/eris"
)

// Бизнес-логика сущности Пароль

// Символы, используемые при генерации нового пин-кода
const otpChars = "1234567890"

// EncryptPassword шифрует пароль при помощи алгоритма argon2id
func EncryptPassword(plainPassword string) (string, error) {
	hash, err := argon2id.CreateHash(plainPassword, argon2id.DefaultParams)
	if err != nil {
		return "", eris.Wrap(err, "error encrypting password")
	}
	return string(hash), nil
}

// CompareHashAndPassword проверяет, равен ли зашифрованный пароль незашифрованному.
// Зашифрованный пароль приходит, например, из базы, а незашифрованный из браузера пользователя.
func CompareHashAndPassword(hash string, plain string) error {
	_, err := argon2id.ComparePasswordAndHash(plain, hash)
	if err != nil {
		return eris.Wrap(err, "error comparing password and hash with argon2id")
	}
	return nil
}

// GeneratePin создает псевдослучайный пин-код
func GeneratePin(length int) (string, error) {
	buffer := make([]byte, length)
	_, err := rand.Read(buffer)
	if err != nil {
		return "", eris.Wrap(err, "error generating pin code")
	}

	otpCharsLength := len(otpChars)
	for i := 0; i < length; i++ {
		buffer[i] = otpChars[int(buffer[i])%otpCharsLength]
	}

	return string(buffer), nil
}
