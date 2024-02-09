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
 * get detailed profile information about the current user
 * 
 * @param {Object} req 
 * @returns {Object}
 */
const getProfile = async (req) => {
  const { data: currentProfile } = await getData('/me', req.cookies.access_token);

  return currentProfile;
}


/**
 * get the current user´s top artists based on calculated affinity
 * 
 * @param {Object} req 
 * @param {number} itemLimit 
 * @returns {Object}
 */
const getTopArtist = async (req, itemLimit) => {
  const { limit, offset, page } = getUrlQuery(req.params, itemLimit);

  const { data: topArtist } = 
  await getData(`/me/top/artists?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  const baseUrl = `${req.baseUrl}/top/artist`;

  return { baseUrl, page, ...topArtist }
}


/**
 * get the current user´s top tracks based on calculated affinity
 * 
 * @param {Object} req 
 * @param {number} itemLimit 
 * @returns {Object}
 */
const getTopTracks = async (req, itemLimit) => {
  const { limit, offset, page } = getUrlQuery(req.params, itemLimit);

  const { data: topTracks } = 
  await getData(`/me/top/tracks?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  const baseUrl = `${req.baseUrl}/top/track`;

  return { baseUrl, page, ...topTracks }
}


/**
 * get the current user´s followed artists.
 * 
 * @param {Object} req 
 * @returns {Object}
 */
const getFollowedArtist = async (req) => {
  const { data: { artists: followedArtist } } = 
  await getData('/me/following?type=artist', req.cookies.access_token);

  return followedArtist; 
}


module.exports = {
  getProfile,
  getTopArtist,
  getTopTracks,
  getFollowedArtist
}