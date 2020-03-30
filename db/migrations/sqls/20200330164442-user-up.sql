/* Replace with your SQL commands */
-- Drop table
-- DROP TABLE public."user";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";CREATE TABLE public."user" (
    uuid_ uuid NOT NULL DEFAULT uuid_generate_v4(),
    username varchar(100) NOT NULL,
    "password" varchar(100) NOT NULL,
    created_at timestamp NOT NULL DEFAULT now(),
    updated_at timestamp NOT NULL DEFAULT now(),
    CONSTRAINT user_pk PRIMARY KEY (uuid_),
    CONSTRAINT user_un UNIQUE (username, uuid_)
);