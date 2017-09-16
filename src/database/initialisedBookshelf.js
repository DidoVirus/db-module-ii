'use strict';

const knex = require('knex');
const bookshelf = require('bookshelf');
const logQuery = require('./logQuery');

const isTest = process.env.NODE_ENV === 'test';
const databaseName = isTest ? 'database.test' : 'database';
const filename = `./data/${databaseName}.sqlite`;

const connection = knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename
    }
});

if (!isTest) {
    connection.on('query', logQuery);
}

module.exports = bookshelf(connection);
