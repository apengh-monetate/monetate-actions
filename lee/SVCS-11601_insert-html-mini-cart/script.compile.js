"use strict";

(function () {
  console.log('MOUSE OVER MINI-CART'); // Poll for element

  function pollForElement(element, callback) {
    if (element) {
      callback();
    } else {
      setTimeout(function () {
        pollForElement(element, callback);
      }, 100);
    }
  }

  var mtMiniCartText = $('#mtMiniCartText');
  pollForElement(mtMiniCartText, function () {
    console.log('Poll for Element, Then Mouse Over Mini-Cart');
    $('.topnav-cart.has-products > a').trigger('mouseover');
  });
})();

(function () {
  var minicart = document.querySelector('.topnav-cart.has-products > a');
  console.log(minicart);
  minicart.focus();
})();

var t = void 0;
t.isSmallScreen ? (t.toggleOverlay(), t.$globalCartWishlistPanels.find(".notification").removeClass("hide"), t.$globalCartWishlistPanels.removeClass("hide"), t.isTopMiniCart || t.$globalCartWishlistPanels.show(), $("html,body").animate({
  scrollTop: 0
}, "fast")) : (t.$globalCartWishlistPanels.show(), t.$globalCartWishlistPanels.removeClass("hide"));

//# sourceMappingURL=script.compile.js.map
