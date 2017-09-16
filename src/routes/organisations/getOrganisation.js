'use strict';

const { Organisation } = require('../../database/models');

module.exports = function getOrganisation(req, res) {
    return Organisation.where({ id: req.params.id })
        .fetch()
        .then(organisations => res.json(organisations.serialize({ omitPivot: true })));
};
