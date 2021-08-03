package utils

import (
	"crypto/rand"
	"github.com/droidion/implementing-change/internal/db"
)

const otpChars = "1234567890"

// GenerateOTP создает псевдослучайные пин-коды
func GenerateOTP(length int) (string, error) {
	buffer := make([]byte, length)
	_, err := rand.Read(buffer)
	if err != nil {
		return "", err
	}

	otpCharsLength := len(otpChars)
	for i := 0; i < length; i++ {
		buffer[i] = otpChars[int(buffer[i]) % otpCharsLength]
	}

	return string(buffer), nil
}

func GenerateTeams(teamCount int, gameId int) []db.Team {
	teams := make([]db.Team, teamCount)
	for i := 0; i < teamCount; i++ {
		pin, err := GenerateOTP(6)
		if err != nil {
			pin = ""
		}
		teams[i] = db.Team{
			Team: i + 1,
			GameId: gameId,
			Pin: pin,
		}
	}
	return teams
}
