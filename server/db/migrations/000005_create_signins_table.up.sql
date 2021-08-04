create table if not exists signins
(
    id serial,
    timestamp timestamp,
    user_id integer
);

alter table signins
    add constraint signins_pk
        primary key (id);

alter table signins
    add constraint players_fk
        foreign key (user_id)
            references players(id);