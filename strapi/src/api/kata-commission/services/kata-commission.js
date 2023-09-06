'use strict';

/**
 * kata-commission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kata-commission.kata-commission');
