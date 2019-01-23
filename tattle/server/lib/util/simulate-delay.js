"use strict";


// This is used to make the front-end behaviour a little more
// realistic while we use a simplistic "in-memory" db.

function someMilliseconds() {
  return Math.floor(Math.random() * 400) + 100;
}

module.exports = function simulateDelay(callback) {
  setTimeout(callback, someMilliseconds());
}

