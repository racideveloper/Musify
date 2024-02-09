/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


/**
 * custom modules
 */
const userApi = require('../api/user.api');
const playerApi = require('../api/player.api');
const playlistApi = require('../api/playlist.api');
const { msToTimeCode } = require('../utils/helpers.util');


const playlist = async (req, res) => {

  // current user profile
  const currentProfile = await userApi.getProfile(req);

  // recently played tracks
  const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  const recentlyPlayedTracks = recentlyPlayed.items.map(({ track }) => track);

  // featured playlist
  const featuredPlaylist = await playlistApi.getFeatured(req);

  res.render('./pages/playlist', {
    currentProfile,
    recentlyPlayedTracks,
    featuredPlaylist
  });

}


const playlistDetail = async (req, res) => {

  // current user profile
  const currentProfile = await userApi.getProfile(req);

  // recently played tracks
  const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  const recentlyPlayedTracks = recentlyPlayed.items.map(({ track }) => track);

  // get playlist detail
  const playlistDetail = await playlistApi.getDetail(req);

  res.render('./pages/playlist_detail', {
    currentProfile,
    recentlyPlayedTracks,
    playlistDetail,
    msToTimeCode
  });
}


module.exports = {
  playlist,
  playlistDetail
}