create table if not exists progress
(
    id serial,
    timestamp timestamp not null,
    player_id integer not null,
    day integer not null,
    approval integer not null,
    period integer not null

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