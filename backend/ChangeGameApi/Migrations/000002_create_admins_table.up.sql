create table if not exists admins
(
    id serial,
    name text not null,
    login text not null,
    password text not null
);

create unique index admins_id_uindex
    on admins (id);

alter table admins
    add constraint admins_pk
        primary key (id);