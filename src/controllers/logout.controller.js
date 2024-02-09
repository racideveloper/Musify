/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


const logout = (req, res) => {
  res.clearCookie('access_token');
  res.clearCookie('refresh_token');
  res.redirect('/login');
}


module.exports = { logout }