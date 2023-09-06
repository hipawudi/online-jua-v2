'use strict';

/**
 * referee-commission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::referee-commission.referee-commission');
