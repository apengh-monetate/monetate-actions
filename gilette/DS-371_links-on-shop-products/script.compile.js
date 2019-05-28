"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  // Poll for element
  function pollForObject(object, callback) {
    if (_typeof(object) === "object") {
      callback();
    } else {
      setTimeout(function () {
        pollForElement(object, callback);
      }, 100);
    }
  }

  pollForObject(__NEXT_DATA__, function () {
    var product = 1;
    var dataObject = __NEXT_DATA__.props.pageProps.products[product];
    dataObject.ean = "00047400665910";
    dataObject.id = "00047400665910";
    dataObject.price = 15;
    dataObject.product_promotions.promotional_price = 12;
    dataObject.short_name = "SkinGuard";
  });
})();

//# sourceMappingURL=script.compile.js.map
