'use strict';

const { User } = require('../../database/models');

module.exports = function addUser(req, res) {
  const { name, email, userRoleId } = req.body;
  const user = new User({ name, email, userRoleId });
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
      .then(organisation => res.json(organisation.serialize()))
  user.save().then(user => res.json(user.serialize({ omitPivot: true })));
};
