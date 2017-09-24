'use strict';

const { User } = require('../../database/models');

module.exports = function getUsers(req, res) {
    return User.fetchAll()
        .then(user => res.json(user.serialize({ omitPivot: true })));
};
