/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


/**
 * node modules
 */
require('dotenv').config();


// the base address of web api
const BASE_URL = 'https://api.spotify.com/v1';


// the base address of spotify authentication token
const TOKEN_BASE_URL = 'https://accounts.spotify.com/api';


// spotify client Id
const CLIENT_ID = process.env.CLIENT_ID;


// spotify client secret
const CLIENT_SECRET = process.env.CLIENT_SECRET;


// redirect uri for spotify authorization code flow
const REDIRECT_URI = process.env.REDIRECT_URI;


// scope of spotify api request
const SCOPE = process.env.SCOPE;


// authentication state key
const STATE_KEY = 'spotify_auth_state';


// api request queries
const MARKET = 'US';
const LOW_LIMIT = 12;
const DEFAULT_LIMIT = 28;

// musixmatch base url for track lyrics
const MUSIXMATCH_BASE_URL = 'https://api.musixmatch.com/ws/1.1/';

// musixmatch api key
const MUSIXMATCH_API_KEY = process.env.MUSIXMATCH_API_KEY;

module.exports = {
  BASE_URL,
  TOKEN_BASE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  SCOPE,
  STATE_KEY,
  MARKET,
  LOW_LIMIT,
  DEFAULT_LIMIT,
  MUSIXMATCH_BASE_URL,
  MUSIXMATCH_API_KEY
}