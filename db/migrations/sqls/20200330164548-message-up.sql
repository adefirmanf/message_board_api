/* Replace with your SQL commands */
-- Drop table
-- DROP TABLE public.message;
CREATE TABLE public.message (
    id serial NOT NULL,
    user_uuid uuid NOT NULL,
    value text NOT NULL,
    total_vote int4 NOT NULL DEFAULT 0,
    created_at timestamp NOT NULL DEFAULT now(),
    updated_at timestamp NOT NULL DEFAULT now(),
    CONSTRAINT message_pk PRIMARY KEY (id)
);-- Permissions