'use strict';

/**
 * development-commission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::development-commission.development-commission');
