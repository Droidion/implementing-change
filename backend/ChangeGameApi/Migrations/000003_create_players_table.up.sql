create table if not exists players
(
    id serial,
    team int not null,
    pin text not null,
    game_id int not null
);

create unique index players_id_uindex
    on players (id);

alter table players
    add constraint players_pk
        primary key (id);

alter table players
    add constraint games_fk
        foreign key (game_id)
            references games(id);