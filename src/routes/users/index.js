'use strict';

const express = require('express');
const addUser = require('./addUser');
const getUsers = require('./getUsers');
const linkUser = require('./linkUser');

const router = express.Router();

const PATH = '/users';

router.post(PATH, addUser);
router.get(PATH, getUsers);
router.patch(`${PATH}/:userId/link-to/:organisationId`, linkUser);

module.exports = router;
