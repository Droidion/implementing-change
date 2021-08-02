create table if not exists users
(
    id serial,
    team int not null,
    pin text not null,
    is_active boolean not null,
    game_id int not null
);

create unique index users_id_uindex
    on users (id);

alter table users
    add constraint users_pk
        primary key (id);

alter table users
    add constraint games_fk
        foreign key (game_id)
            references games(id);