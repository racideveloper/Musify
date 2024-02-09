/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


/**
 * node modules
 */
const router = require('express').Router();


/**
 * custom modules
 */
const { playlist, playlistDetail } = require('../controllers/playlist.controller');


router.get(['/', '/page/:page'], playlist);


router.get('/:playlistId', playlistDetail);


module.exports = router;