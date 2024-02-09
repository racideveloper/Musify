/**
 * @license Apache-2.0
 * @copyright RCAcademy 2024
 */

'use strict';


/**
 * add events on elements
 */
const addEventOnElems = function (elements, eventType, callback) {
  elements.forEach(element => element.addEventListener(eventType, callback));
}


/**
 * Convert millisecond to time code
 */
const msToTimeCode = (ms) => {
  const /** {number} */ sec = Math.floor((ms % 60000) / 1000);
  const /** {number} */ min = Math.floor((ms % 3600000) / 60000);

  const /** {string} */ formattedSec = sec.toString().padStart(2, '0');
  const /** {string} */ formattedMin = min.toString().padStart(2, '0');

  return `${formattedMin}:${formattedSec}`;
}


export { addEventOnElems, msToTimeCode }