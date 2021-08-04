create table if not exists progress
(
    id serial,
    timestamp timestamp,
    user_id integer,
    day integer,
    approval integer,
    period integer

);

create index progress_user_id_uindex
    on progress (user_id);

alter table progress
    add constraint progress_pk
        primary key (id);

alter table progress
    add constraint players_fk
        foreign key (user_id)
            references players(id);