"use strict";

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
    return document.querySelectorAll('#tCt3_THEOplayerpCt video').length;
  }; // Function for when the video element is present


  var onReady = function onReady() {
    // Get the video element
    var video = document.querySelector('#tCt3_THEOplayerpCt video');
    video.setAttribute('muted', 'muted'); // Set the video to muted
    // In order to use the play() method on the video, we need to interact with the page first

    document.body.click(); // Check if the video is playing
    // If not, call the play method on the video

    var isVideoPlaying = function isVideoPlaying(video) {
      return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
    };

    if (!isVideoPlaying(video)) {
      video.play();
    }
  };

  pollingFunction(50, 10000, isReady, onReady);
})();

//# sourceMappingURL=script.transpiled.js.map
