create table if not exists progress
(
    id serial,
    timestamp timestamp,
    game_id integer,
    day integer,
    approval integer,
    period integer

);

create index progress_game_id_uindex
    on progress (game_id);

alter table progress
    add constraint progress_pk
        primary key (id);

alter table progress
    add constraint games_fk
        foreign key (game_id)
            references games(id);