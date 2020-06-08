"use strict";

/** 
 * The video on the homepage uses the THEOplayer plugin
 * https://docs.portal.theoplayer.com/
 */
(function () {
  // Polling function
  var pollingFunction = function pollingFunction(interval, timeout, isReady, onReady, opt_onTimeout) {
    (function () {
      if (isReady()) {
        onReady();
      } else {
        if (timeout > 0) {
          timeout -= interval;
          setTimeout(
          /** @type {function()} */
          arguments.callee, interval);
        } else {
          if (opt_onTimeout) {
            opt_onTimeout();
          }
        }
      }
    })();
  }; // Poll for the video element


  var isReady = function isReady() {
    var video = window.THEOplayer && window.THEOplayer.players[0];
    return video;
  }; // Function for when the video element is present


  var onReady = function onReady() {
    // Mute the video
    window.THEOplayer.players[0].muted = true;
  };

  pollingFunction(50, 10000, isReady, onReady);
})();

//# sourceMappingURL=script.transpiled.js.map
