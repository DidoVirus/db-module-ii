'use strict';

const { Service } = require('../../database/models');

module.exports = function addService(req, res) {
  const { name } = req.body;
  const service = new Service({ name });
  service.save().then(service => res.json(service.serialize({ omitPivot: true })));
};
