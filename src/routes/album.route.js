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
const { album, albumDetail } = require('../controllers/album.controller');


router.get(['/', '/page/:page'], album);


router.get('/:albumId', albumDetail);


module.exports = router;