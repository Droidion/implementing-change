create table if not exists signins
(
    id serial,
    timestamp timestamp,
    player_id integer
);

alter table signins
    add constraint signins_pk
        primary key (id);

alter table signins
    add constraint players_fk
        foreign key (player_id)
            references players(id);