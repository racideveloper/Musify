/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


/**
 * custom modules
 */
const { getData } = require('../config/axios.config');
const apiConfig = require('../config/api.config');


/**
 * get tracks from the current user's recently played tracks
 * 
 * @param {Object} req 
 * @param {number} itemLimit 
 * @returns {Object}
 */
const getRecentlyPlayed = async (req, itemLimit = apiConfig.DEFAULT_LIMIT) => {
  const { data: recentlyPlayed } = await getData(`/me/player/recently-played?limit=${itemLimit}`, req.cookies.access_token);

  return recentlyPlayed;
}


module.exports = { getRecentlyPlayed }