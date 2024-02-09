/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


/**
 * custom modules
 */
const { getData } = require('../config/axios.config');
const { getUrlQuery } = require('../utils/helpers.util');


/**
 * get a list of new album releases featured in spotify
 * 
 * @param {Object} req 
 * @param {number} itemLimit 
 * @returns {Object}
 */
const getNewRelease = async (req, itemLimit) => {
  const { limit, offset, page } = getUrlQuery(req.params, itemLimit);

  const { data: { albums: newRelease } } = 
  await getData(`/browse/new-releases?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  return { baseUrl: req.baseUrl, page, ...newRelease }
}


/**
 * get spotify catalog information for a single album
 * 
 * @param {Object} req 
 * @returns {Object}
 */
const getDetail = async (req) => {
  const { albumId } = req.params;

  const { data: albumDetail } = await getData(`/albums/${albumId}`, req.cookies.access_token);

  return albumDetail;
}


module.exports = {
  getNewRelease,
  getDetail
}