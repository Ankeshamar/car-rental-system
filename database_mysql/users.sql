CREATE TABLE users (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    account_non_expired BIT(1) NOT NULL,
    account_non_locked BIT(1) NOT NULL,
    credentials_non_expired BIT(1) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    enabled BIT(1) NOT NULL,
    password VARCHAR(255),
    username VARCHAR(255) NOT NULL UNIQUE
);
