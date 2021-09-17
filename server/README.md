# Бэкэнд игры Управление Изменениями

API для работы с интерфейсом игры и админкой.

[Документация API](API.md).

## Стек

- Go
- Fiber
- Postgres
- [migrate](https://github.com/golang-migrate/migrate)
- Docker

## Как запустить

### Нативно

[Установите Go](https://golang.org/doc/install).

Поднимите локальный сервер базы данных [Postgres](https://www.postgresql.org/download/).

Установите [migrate](https://github.com/golang-migrate/migrate/tree/master/cmd/migrate)

Создайте пустую базу данных под игру.

Актуализируйте переменные окружения в файле `.env`.

Примените миграции базы:

`$ migrate -database "postgresql://localhost/changegame?sslmode=disable" -path db/migrations up`

Запустите сервер:

`$ go run github.com/droidion/implementing-change/cmd`.

Запустите сервер сообщений:

`$ docker run --ulimit nofile=65536:65536 -v ~/Projects/tim/implementing-change:/centrifugo -p 8000:8000 centrifugo/centrifugo centrifugo -c centrifugo-config.json --admin`

### Докер

TODO.