'use strict';

const { Organisation } = require('../../database/models');

module.exports = function updateOrganisation(req, res) {
    return Organisation.where({ id: req.params.id })
        .fetch()
        .then(
            organisation => organisation.set(/*TODO: specify properties to update*/)
        )
        .then(organisation => organisation.save())
        .then(organisation => res.json(organisation.serialize()));
};
