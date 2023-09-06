'use strict';

/**
 * event-management router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::event-management.event-management');
