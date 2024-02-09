/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


/**
 * custom modules
 */
const apiConfig = require('../config/api.config');


/**
 * generated a random string containing numbers and letters
 * @param {number} length 
 * @returns {string}
 */
const generateRandomString = function (length) {
  let /** {string | undefined} */ randomString = '';
  const /** {string} */ possibleLetters = 
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  for (let i = 0; i < length - 1; i++) {
    const /** {number} */ randomIndex = Math.floor(Math.random() * possibleLetters.length);
    randomString += possibleLetters[randomIndex];
  }

  return randomString;
}


/**
 * constructs a URL query object based on provided parameters
 * 
 * @param {Object} params 
 * @param {number} [params.page=1] 
 * @param {number} [limit=apiConfig.DEFAULT_LIMIT]
 * @returns {Object}
 */
const getUrlQuery = (params, limit = apiConfig.DEFAULT_LIMIT) => {
  const { page = 1 } = params;
  const /** {number} */ offset = (limit * page) - limit;

  return { limit, offset, page }
}


/**
 * Convert millisecond to time code
*/
const msToTimeCode = (ms) => {
  const /** {number} */ sec = Math.floor((ms % 60000) / 1000);
  const /** {number} */ min = Math.floor((ms % 3600000) / 60000);

  const /** {string} */ formattedSec = sec.toString().padStart(2, '0');
  const /** {string} */ formattedMin = min.toString().padStart(2, '0');

  return `${formattedMin}:${formattedSec}`;
}


module.exports = {
  generateRandomString,
  getUrlQuery,
  msToTimeCode
}