/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


/**
 * custom modules
 */
const apiConfig = require('../config/api.config');
const userApi = require('../api/user.api');
const playerApi = require('../api/player.api');
const artistApi = require('../api/artist.api');
const { msToTimeCode } = require('../utils/helpers.util');


const artistDetail = async (req, res) => {

  // current user profile
  const currentProfile = await userApi.getProfile(req);

  // recently played tracks
  const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  const recentlyPlayedTracks = recentlyPlayed.items.map(({ track }) => track);

  // artist albums
  const artistAlbums = await artistApi.getAlbum(req, apiConfig.LOW_LIMIT);

  // artist detail
  const artistDetail = await artistApi.getDetail(req);

  // artist top tracks
  const artistTopTrack = await artistApi.getTopTracks(req);

  // artist related artists
  const relatedArtist = await artistApi.getRelated(req);

  res.render('./pages/artist_detail', {
    currentProfile,
    recentlyPlayedTracks,
    artistAlbums,
    artistDetail,
    artistTopTrack,
    relatedArtist,
    msToTimeCode
  });

}


const artistAlbum = async (req, res) => {

  // current user profile
  const currentProfile = await userApi.getProfile(req);

  // recently played tracks
  const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  const recentlyPlayedTracks = recentlyPlayed.items.map(({ track }) => track);

  // artist albums
  const artistAlbums = await artistApi.getAlbum(req);

  // artist detail
  const artistDetail = await artistApi.getDetail(req);

  res.render('./pages/album', {
    currentProfile,
    recentlyPlayedTracks,
    title: artistDetail.name,
    albums: artistAlbums,
    isArtistAlbum: true
  });

}


module.exports = {
  artistDetail,
  artistAlbum
}