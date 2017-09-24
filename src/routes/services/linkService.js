'use strict';

const { OrganisationService } = require('../../database/models');

module.exports = function linkService(req, res) {
    const { serviceId, organisationId } = req.params;
    const organisations = new OrganisationService({ serviceId, organisationId });
    organisations.save().then(organisations => res.json(organisations.serialize({ omitPivot: true })));

};
