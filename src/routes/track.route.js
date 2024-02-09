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
const { trackDetail } = require('../controllers/track.controller');


router.get('/:trackId', trackDetail);


module.exports = router;