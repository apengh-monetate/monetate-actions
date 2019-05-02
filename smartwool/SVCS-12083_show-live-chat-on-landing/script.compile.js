"use strict";

(function () {
  // Poll for element
  function pollForElement(selector, callback) {
    if ($(selector)) {
      callback();
    } else {
      setTimeout(function () {
        pollForElement(selector, callback);
      }, 100);
    }
  }

  var $chatContainer = $('#bc-chat-container');

  if ($chatContainer === undefined) {
    pollForElement('.topnav-utility-item.livechat > a', function () {
      $('.topnav-utility-item.livechat > a').click();
      pollForElement('.bc-headbtn.bc-headbtn-minimize', function () {
        $('.bc-headbtn.bc-headbtn-minimize').click();
      });
    });
  }
})();

//# sourceMappingURL=script.compile.js.map
