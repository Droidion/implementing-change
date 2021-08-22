create table if not exists progress
(
    id serial,
    timestamp timestamp,
    player_id integer,
    day integer,
    approval integer,
    period integer

);

create index progress_player_id_uindex
    on progress (player_id);

alter table progress
    add constraint progress_pk
        primary key (id);

alter table progress
    add constraint players_fk
        foreign key (player_id)
            references players(id);