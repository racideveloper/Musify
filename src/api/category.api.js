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
 * get a list of categories used to tag items in spotify
 * 
 * @param {Object} req 
 * @returns {Object}
 */
const getSeveralDetail = async (req) => {

  const { offset, limit, page } = getUrlQuery(req.params);

  const { data: { categories } } = 
  await getData(`/browse/categories?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  return { baseUrl: req.baseUrl, page, name: 'Explore', ...categories }

}


/**
 * get a single category used to tag items in spotify
 * 
 * @param {Object} req 
 * @returns {Object}
 */
const getDetail = async (req) => {
  const { categoryId } = req.params;

  const { data: catInfo } = 
  await getData(`/browse/categories/${categoryId}`, req.cookies.access_token);

  return catInfo;
}


module.exports = {
  getSeveralDetail,
  getDetail
}