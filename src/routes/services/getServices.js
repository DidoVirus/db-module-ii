'use strict';

const { Service } = require('../../database/models');

module.exports = function getServices(req, res) {
    return Service.fetchAll()
        .then(service => res.json(service.serialize({ omitPivot: true })));
};
