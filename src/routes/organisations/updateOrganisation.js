'use strict';

const { Organisation } = require('../../database/models');

module.exports = function updateOrganisation(req, res) {
  const {
    name,
    address,
    city,
    postcode,
    telephone,
  } = req.body
    return Organisation.where({ id: req.params.id })
        .fetch()
        .then(organisation => organisation.set({
          name,
          address,
          city,
          postcode,
          telephone
        }))
        .then(organisation => organisation.save())
        .then(organisation => res.json(organisation.serialize()));
};
