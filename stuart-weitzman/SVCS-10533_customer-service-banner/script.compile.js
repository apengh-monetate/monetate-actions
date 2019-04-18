"use strict";

// ==================================================================
// Toggle class on scroll
// ==================================================================
(function () {
  var pixelsFromTop = 1000;
  var banner = $('#monetate_selectorBanner_f4849e09_00');
  $(window).on('scroll', function () {
    var scrollPosY = window.pageYOffset | document.body.scrollTop;

    if (scrollPosY >= pixelsFromTop) {
      banner.slideDown();
    } else {
      banner.slideUp();
    }
  });
})();

//# sourceMappingURL=script.compile.js.map
