# Бэкэнд игры Управление Изменениями

API для работы с интерфейсом игры и админкой.

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

### Докер

TODO.