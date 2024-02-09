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
const { profile, topArtist, topTrack } = require('../controllers/profile.controller');


router.get('/', profile);


router.get(['/top/artist', '/top/artist/page/:page'], topArtist);


router.get(['/top/track', '/top/track/page/:page'], topTrack);


module.exports = router;