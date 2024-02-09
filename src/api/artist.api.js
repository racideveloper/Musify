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
const { getUrlQuery } = require('../utils/helpers.util');


/**
 * get spotify catalog information for several artists based on their spotify IDs
 * 
 * @param {Object} req 
 * @param {string} artistIds 
 * @returns {Object}
 */
const getSeveralDetail = async (req, artistIds) => {
  const { data: trackArtists } = await getData(`/artists?ids=${artistIds}`, req.cookies.access_token);

  return trackArtists;
}


/**
 * get spotify catalog information about an artist's albums
 * 
 * @param {Object} req 
 * @param {number} itemLimit 
 * @param {string} id 
 * @returns {Object}
 */
const getAlbum = async (req, itemLimit, id) => {
  const { offset, limit, page } = getUrlQuery(req.params, itemLimit);
  const { artistId = id } = req.params;

  const { data: artistAlbum } = 
  await getData(`/artists/${artistId}/albums?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  const /** {string} */ baseUrl = `${req.baseUrl}/${artistId}/album`;

  return { baseUrl, page, ...artistAlbum }
}


/**
 * get spotify catalog information for a single artist identified by their unique spotify
 * 
 * @param {Object} req
 * @returns {Object} 
 */
const getDetail = async (req) => {
  const { artistId } = req.params;

  const { data: artistDetail } = await getData(`/artists/${artistId}`, req.cookies.access_token);

  return artistDetail;
}


/**
 * get spotify catalog information about an artist's top tracks by country
 * 
 * @param {Object} req 
 * @param {string} id
 * @returns {Object} 
 */
const getTopTracks = async (req, id) => {
  const { artistId = id } = req.params;

  const { data: artistTopTracks } = 
  await getData(`/artists/${artistId}/top-tracks?market=${apiConfig.MARKET}`, req.cookies.access_token);

  return artistTopTracks;
}


/**
 * get spotify catalog information about artists similar to a given artist.
 * similarity is based on analysis of the spotify community's listening history
 * 
 * @param {Object} req 
 * @param {string} id
 * @returns {Object} 
 */
const getRelated = async (req, id) => {
  const { artistId = id } = req.params;

  const { data: relatedArtist } =
  await getData(`/artists/${artistId}/related-artists`, req.cookies.access_token);

  return relatedArtist;
}


module.exports = {
  getSeveralDetail,
  getAlbum,
  getDetail,
  getTopTracks,
  getRelated
}