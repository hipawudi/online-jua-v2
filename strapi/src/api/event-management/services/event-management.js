'use strict';

/**
 * event-management service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-management.event-management');
