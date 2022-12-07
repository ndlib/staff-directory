'use strict';

/**
 * purl service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::purl.purl');
