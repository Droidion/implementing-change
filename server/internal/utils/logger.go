package utils

import (
	"github.com/rs/zerolog/log"
	"gopkg.in/natefinch/lumberjack.v2"
)

// InitLogger инициализирует логирование
func InitLogger() {
	log.Logger = log.Output(&lumberjack.Logger{
		Filename:   "implementing-change-server-go.log",
		MaxSize:    500, // megabytes
		MaxBackups: 3,
		MaxAge:     28, //days
		Compress:   true, // disabled by default
	}).With().Caller().Logger()
}