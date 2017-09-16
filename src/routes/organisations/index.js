'use strict';

const express = require('express');
const getOrganisations = require('./getOrganisations');
const getOrganisation = require('./getOrganisation');
const updateOrganisation = require('./updateOrganisation');
const router = express.Router();

const PATH = '/organisations';

router.get(PATH, getOrganisations);
router.get(`${PATH}/:id`, getOrganisation);
router.patch(`${PATH}/:id`, updateOrganisation);

module.exports = router;
