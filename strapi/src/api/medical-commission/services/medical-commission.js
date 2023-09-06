'use strict';

/**
 * medical-commission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::medical-commission.medical-commission');
