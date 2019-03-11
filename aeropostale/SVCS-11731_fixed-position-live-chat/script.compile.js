"use strict";

(function () {
  var backToTop = $('.mt-chat__back-to-top');
  backToTop.on('click', function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
})();

//# sourceMappingURL=script.compile.js.map
