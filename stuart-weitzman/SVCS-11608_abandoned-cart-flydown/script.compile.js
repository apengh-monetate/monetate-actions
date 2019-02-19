"use strict";

(function () {
  var animationComplete = 8500;
  var elements = document.querySelectorAll('#checkout-link > div[id*="monetate_selectorHTML"], #checkout-icon > div[id*="monetate_selectorHTML"]');
  setTimeout(function () {
    console.log('Animation complete');

    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add('flydownComplete');
    }
  }, animationComplete);
  $('.mt-abandoned-cart').on('click', function (event) {
    event.stopPropagation();
  });
})();

//# sourceMappingURL=script.compile.js.map
