/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


/**
 * nodem modules
 */
const router = require('express').Router();


/**
 * custom modules
 */
const { home } = require('../controllers/home.controller');


router.get('/', home);


module.exports = router;