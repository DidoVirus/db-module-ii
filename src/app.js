'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const organisations = require('./routes/organisations');
const services = require('./routes/services');
const users = require('./routes/users');

const app = express();

app.use(bodyParser.json())
app.use(organisations);
app.use(services);
app.use(users);


module.exports = app;
