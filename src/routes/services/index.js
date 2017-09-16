'use strict';

const express = require('express');
const addService = require('./addService');
const linkService = require('./linkService');
const router = express.Router();

const PATH = '/services';

router.post(PATH, addService);
router.patch(`${PATH}/:serviceId/link-to/:organisationId`, linkService);

module.exports = router;
