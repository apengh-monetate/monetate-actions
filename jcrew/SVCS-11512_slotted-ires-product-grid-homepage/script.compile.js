"use strict";

(function () {
  // Poll for element
  function pollForElement(element, callback) {
    if (element) {
      callback();
    } else {
      setTimeout(function () {
        pollForElement(element, callback);
      }, 100);
    }
  } // Add classes to homepage grid recs


  function initAddClassesToMerchItems() {
    var recommendation = document.querySelector('div[data-recommendations-name]');
    pollForElement(recommendation, function () {
      var listItems = recommendation.querySelectorAll('.mt_grid__recommendations-item');
      var lastListItem = recommendation.querySelectorAll('.mt_grid__recommendations-item')[listItems.length - 1];
      pollForElement(lastListItem, function () {
        var merchItems = recommendation.querySelectorAll('.mt-merch-item');
        merchItems.forEach(function (merchItem, index) {
          merchItem.classList.add('mt-merch-item-' + (index + 1));
        });
      });
    });
  }

  window.onload = function () {
    initAddClassesToMerchItems();
  };
})();

//# sourceMappingURL=script.compile.js.map
