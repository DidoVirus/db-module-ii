'use strict';

const bookshelf = require('./initialisedBookshelf');

const Service = bookshelf.Model.extend({
    tableName: 'service',

    organisations() {
        return this.belongsToMany(
            Organisation,
            'organisationService',
            'organisationId',
            'serviceId'
        );
    }
});

const Role = bookshelf.Model.extend({
    tableName: 'role',
});

const User = bookshelf.Model.extend({
    tableName: 'user',

    organisations() {
        return this.belongsToMany(
            Organisation,
            'contactUser',
            'organisationId',
            'userId'
        );
    },

    role() {
        return this.hasOne(Role);
    }
});

const Organisation = bookshelf.Model.extend({
    tableName: 'organisation',

    contactUsers() {
        return this.hasMany(User).through(
            ContactUserOrganisation,
            'id',
            'organisationId',
            'userId',
            'id'
        );
    },

    services() {
        return this.hasMany(Service).through(
            OrganisationService,
            'id',
            'organisationId',
            'serviceId',
            'id'
        );
    }
});

const OrganisationService = bookshelf.Model.extend({
    tableName: 'organisationService'
});

const ContactUserOrganisation = bookshelf.Model.extend({
    tableName: 'contactUserOrganisation'
});

module.exports = {
    Service,
    Role,
    User,
    Organisation,
    OrganisationService,
    ContactUserOrganisation,
};
