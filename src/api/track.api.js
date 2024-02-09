/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


/**
 * custom modules
 */
const { 
  getData,
  musixmatchApi 
} = require('../config/axios.config');


/**
 * 
 * @param {Object} req 
 * @param {Object} seeds 
 * @param {number} itemLimit 
 * @returns {Object}
 */
const getRecommendedTrack = async (req, trackSeed, itemLimit) => {
  const { data: { tracks: recommendedTracks } } = 
  await getData(`/recommendations?seed_tracks=${trackSeed}&limit=${itemLimit}`, req.cookies.access_token);

  return recommendedTracks;
}


/**
 * get spotify catalog information for a single track identified by its unique spotify ID
 * 
 * @param {Object} req 
 * @returns {Object}
 */
const getDetail = async (req) => {
  const { trackId } = req.params;

  const { data: trackDetail } =
  await getData(`/tracks/${trackId}`, req.cookies.access_token);

  return trackDetail;
}


/**
 * retrieves lyrics for a given track and artist using the musixmatch API
 * 
 * @param {string} trackName 
 * @param {string} artistName 
 * @param {string|null} [isrc=null] 
 * @returns {string}
 */
const getLyrics = async (trackName, artistName, isrc = null) => {

  const { message: { body: { lyrics } } } = await musixmatchApi('matcher.lyrics.get?', {
    q_track: trackName.toLowerCase(),
    q_artist: artistName.toLowerCase(),
    track_isrc: isrc
  });

  return lyrics;
}


module.exports = {
  getRecommendedTrack,
  getDetail,
  getLyrics
}