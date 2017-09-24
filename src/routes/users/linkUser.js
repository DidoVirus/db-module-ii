'use strict';

const { ContactUserOrganisation } = require('../../database/models');

module.exports = function linkUser(req, res) {
    const { userId, organisationId } = req.params;
    const contactUserOrganisation = new ContactUserOrganisation({ userId, organisationId });
    contactUserOrganisation.save().then( contactUserOrganisation => res.json(contactUserOrganisation.serialize({ omitPivot: true })));

};
