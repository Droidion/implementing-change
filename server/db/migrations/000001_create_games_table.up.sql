create table if not exists games
(
    id serial,
    creation_date timestamp,
    is_active boolean
);

create unique index games_id_uindex
    on games (id);

alter table games
    add constraint games_pk
        primary key (id);