'use strict';

const { User } = require('../../database/models');

module.exports = function addUser(req, res) {
  const { name, email, userRoleId } = req.body;
  const user = new User({ name, email, userRoleId });
  user.save().then(user => res.json(user.serialize({ omitPivot: true })));
};
