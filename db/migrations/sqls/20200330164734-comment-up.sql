CREATE TABLE public."comment" (
    id serial NOT NULL,
    message_id int4 NOT NULL,
    user_uuid uuid NOT NULL,
    value text NOT NULL DEFAULT '' :: text,
    total_vote int4 NOT NULL DEFAULT 0,
    created_at timestamp NOT NULL DEFAULT now(),
    updated_at timestamp NOT NULL DEFAULT now(),
    CONSTRAINT comment_id_pk PRIMARY KEY (id)
);