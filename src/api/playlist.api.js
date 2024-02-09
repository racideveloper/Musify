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
 * get a list of spotify featured playlists
 * 
 * @param {Object} req 
 * @param {number} itemLimit 
 * @returns {Object}
 */
const getFeatured = async (req, itemLimit) => {
  const { offset, limit, page } = getUrlQuery(req.params, itemLimit);

  const { data: featuredPlaylist } = 
  await getData(`/browse/featured-playlists?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  return { baseUrl: req.baseUrl, page, ...featuredPlaylist }
}


/**
 * get a list of spotify playlists tagged with a particular category
 * 
 * @param {Object} req 
 * @param {number} itemLimit 
 * @returns {Object}
 */
const getCategoryPlaylist = async (req, itemLimit) => {
  const { offset, limit, page } = getUrlQuery(req.params, itemLimit);
  const { categoryId = 'toplists' } = req.params;

  const { data: catPlaylist } = await getData(`/browse/categories/${categoryId}/playlists?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  const /** {string} */ baseUrl = `${req.baseUrl}/${categoryId}`;

  return { baseUrl, page, ...catPlaylist }
}


/**
 * get a playlist owned by a spotify user
 * 
 * @param {Object} req 
 * @returns {Object}
 */
const getDetail = async (req) => {
  const { playlistId } = req.params;

  const { data: playlistDetail } = 
  await getData(`/playlists/${playlistId}?
  fields=description,external_urls,followers(total),id,images,name,owner(display_name),
  tracks(total,items(track(album(images,name),artists,duration_ms,name,id,uri))),type,
  uri`,req.cookies.access_token);

  return playlistDetail;
}


module.exports = {
  getFeatured,
  getCategoryPlaylist,
  getDetail
}