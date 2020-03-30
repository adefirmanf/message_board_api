CREATE TABLE public.vote_event_comment (
    id serial NOT NULL,
    user_uuid uuid NOT NULL,
    comment_id int4 NOT NULL,
    value int4 NOT NULL DEFAULT 0,
    created_at timestamp NOT NULL DEFAULT now(),
    updated_at timestamp NOT NULL DEFAULT now(),
    CONSTRAINT vote_event_comment_pk PRIMARY KEY (id)
);