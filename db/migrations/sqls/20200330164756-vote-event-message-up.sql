/* Replace with your SQL commands */
CREATE TABLE public.vote_event_message (
    id serial NOT NULL,
    user_uuid uuid NOT NULL,
    message_id int4 NOT NULL,
    value int4 NOT NULL DEFAULT 0,
    created_at timestamp NOT NULL DEFAULT now(),
    updated_at timestamp NOT NULL DEFAULT now(),
    CONSTRAINT vote_event_message_pk PRIMARY KEY (id)
);