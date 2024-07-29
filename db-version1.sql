-- Table: expense.account_transaction

-- DROP TABLE expense.account_transaction;

CREATE TABLE expense.account_transaction
(
    acc_trans_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    amount numeric(10,2),
    balance numeric(10,2),
    description character varying(254) COLLATE pg_catalog."default",
    details character varying(10) COLLATE pg_catalog."default",
    posting_date date,
    type character varying(50) COLLATE pg_catalog."default",
    check_slip numeric(10,0),
    CONSTRAINT account_transaction_pkey PRIMARY KEY (acc_trans_id)
)

    TABLESPACE pg_default;

ALTER TABLE expense.account_transaction
    OWNER to postgres;
