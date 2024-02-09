/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


/**
 * node modules
 */
const cors = require('cors');
const cookieParser = require('cookie-parser');


/**
 * custom modules
 */
const login = require('./src/routes/login.route');
const auth = require('./src/routes/auth.route');
const authenticatedUser = require('./src/middlewares/auth_user.middleware');
const home = require('./src/routes/home.route');
const explore = require('./src/routes/explore.route');
const album = require('./src/routes/album.route');
const playlist = require('./src/routes/playlist.route');
const profile = require('./src/routes/profile.route');
const search = require('./src/routes/search.route');
const artist = require('./src/routes/artist.route');
const track = require('./src/routes/track.route');
const logout = require('./src/routes/logout.route');


// initial express app
const express = require('express');
const app = express();


/**
 * EJS setting
 */
app.set('view engine', 'ejs');


/**
 * setting static directory
 */
app.use(express.static(`${__dirname}/public`));


/**
 * enable cors & cookie parser
 */
app.use(cors()).use(cookieParser());


/**
 * encode post request body
 */
app.use(express.urlencoded({ extended: true }));


/**
 * login page
 */
app.use('/login', login);


/**
 * auth page
 */
app.use('/auth', auth);


/**
 * check user is authenticated
 */
app.use(authenticatedUser);


/**
 * logout page
 */
app.use('/logout', logout);


/**
 * home page
 */
app.use('/', home);


/**
 * Explore page
 */
app.use('/explore', explore);


/**
 * album page
 */
app.use('/album', album);


/**
 * playlist page
 */
app.use('/playlist', playlist);


/**
 * profile page
 */
app.use('/me', profile);


/**
 * search result page
 */
app.use('/search', search);


/**
 * artist page
 */
app.use('/artist', artist);


/**
 * track page
 */
app.use('/track', track);


/**
 * 404 page 
 */
app.use((req, res) => {
  res.render('./pages/404');
});


app.listen(9000, () => {
  console.log(`Server listening at http://localhost:9000`);
});