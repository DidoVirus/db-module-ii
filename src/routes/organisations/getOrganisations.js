'use strict';

const { Organisation } = require('../../database/models');

module.exports = function getOrganisations(req, res) {
    return Organisation.fetchAll()
        .then(organisations => res.json(organisations.serialize({ omitPivot: true })));
};
