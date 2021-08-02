create table if not exists signins
(
    id serial,
    timestamp timestamp,
    game_id integer,
    user_id integer
);

create index signins_game_id_uindex
    on signins (game_id);

alter table signins
    add constraint signins_pk
        primary key (id);

alter table signins
    add constraint games_fk
        foreign key (game_id)
            references games(id);

alter table signins
    add constraint users_fk
        foreign key (user_id)
            references users(id);