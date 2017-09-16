BEGIN TRANSACTION;

INSERT INTO service(id, name)
VALUES
    (1, 'Immigration'),
    (2, 'Discrimination'),
    (3, 'Housing'),
    (4, 'Employment');

INSERT INTO role(id, name)
VALUES
    (1, 'Admin'),
    (2, 'Contact');

INSERT INTO user(id, name, email, userRoleId)
VALUES
    (1, 'Joe Bloggs', 'joe@bloggs.com', 2),
    (2, 'John Doe', 'johndoe@email.com', 2),
    (3, 'Ola Nordmann', 'ola@email.com', 2),
    (4, 'Greg Fred', 'greg@fred.com', 2);

INSERT INTO organisation(id, name, address, city, postCode, telephone)
VALUES
    (
        1,
        'Amnesty International',
        '17-25 New Inn Yard',
        'London',
        'EC2A 3EA',
        '020 7033 1500'
    ),

    (
        2,
        'Refugee Council',
        'PO Box 68614',
        'London',
        'E15 9DQ',
        '020 7346 6700'
    ),

    (
        3,
        'Refugee Action',
        '11 Belgrave Road',
        'London',
        'SW1V 1RB',
        '0207 952 1511'
    );

COMMIT;


BEGIN TRANSACTION;

INSERT INTO contactUserOrganisation(userId, organisationId)
VALUES
    (1, 1),
    (2, 1),
    (3, 2),
    (4, 3);

INSERT INTO organisationService(organisationId, serviceId)
VALUES
    (1, 1),
    (1, 2),

    (2, 1),
    (2, 2),
    (2, 3),
    (2, 4),

    (3, 1),
    (3, 2),
    (3, 3),
    (3, 4);

COMMIT;
