/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


const cookies = new Map(document.cookie.split('; ').map(item => item.split('=')));
const BASE_URL = 'https://api.spotify.com/v1';
const headers = {
  'Authorization': `Bearer ${cookies.get('access_token')}`,
  'Content-Type': 'application/json'
}


/**
 * transfer playback to a new device and determine if it should start playing.
 * 
 * @param {string} deviceId 
 * @param {Boolean} play 
 */
const transferPlayback = async (deviceId, play = false) => {
  try {
    const reqBody = { device_ids: [deviceId], play }

    await fetch(`${BASE_URL}/me/player`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(reqBody)
    });
    
  } catch (error) {
    console.log(error);
  }
}


/**
 * this function put a request to spotify server for play track
 * 
 * @param {string} deviceId 
 * @param {object} reqBody 
 */
const play = async (deviceId, reqBody) => {
  try {

    const response = await fetch(`${BASE_URL}/me/player/play?device_id=${deviceId}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(reqBody)
    })
    
    return response;
  } catch (err) {
    console.log(err);
  }
}


export {
  cookies,
  transferPlayback,
  play
}