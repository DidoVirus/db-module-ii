BEGIN TRANSACTION;

CREATE TABLE service (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255)
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255)
);

CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    email TEXT,
    userRoleId INTEGER,
    FOREIGN KEY(userRoleId) REFERENCES role(id)
);

CREATE TABLE organisation (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    address TEXT,
    city VARCHAR(255),
    postCode VARCHAR(8),
    telephone VARCHAR(15)
);

CREATE TABLE contactUserOrganisation (
    userId INTEGER,
    organisationId INTEGER,
    PRIMARY KEY(userId, organisationId),
    FOREIGN KEY(userId) REFERENCES user(id),
    FOREIGN KEY(organisationId) REFERENCES organisation(id)
);

CREATE TABLE organisationService (
    organisationId INTEGER,
    serviceId INTEGER,
    PRIMARY KEY(organisationId, serviceId),
    FOREIGN KEY(organisationId) REFERENCES organisation(id),
    FOREIGN KEY(serviceId) REFERENCES service(id)
);

COMMIT;
