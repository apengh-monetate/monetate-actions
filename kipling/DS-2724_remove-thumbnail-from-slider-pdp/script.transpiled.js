"use strict";

(function () {
  // Poll for element
  function pollForElements(selectors, callback) {
    selectors = Array.isArray(selectors) ? selectors : [selectors];

    if (document.querySelectorAll(selectors).length === selectors.length) {
      callback(document.querySelectorAll(selectors));
    } else {
      setTimeout(function () {
        pollForElements(selectors, callback);
      }, 100);
    }
  }

  pollForElements(['.product-gallery.slick-initialized', '.product-gallery-thumbnails.slick-initialized'], function (nodes) {
    // Get the thumbnail and main product sliders
    var $productSlider = $('.product-gallery.slick-initialized');
    var $thumbnailSlider = $('.product-gallery-thumbnails.slick-initialized'); // Get the settings for each slider

    var productSettings = $productSlider.slick('getSlick').originalSettings;
    var thumbnailSettings = $thumbnailSlider.slick('getSlick').originalSettings; // Destroy each slider

    $productSlider.slick('unslick');
    $thumbnailSlider.slick('unslick'); // Remove the element from the thumbnail slider

    var $thumbnail = $thumbnailSlider.find('div.image.js-is-spin');
    $thumbnail.remove(); // Remove the element from the main product slider

    var $product = $productSlider.find('div.product-gallery-elem.spin');
    $product.remove(); // Reinitialize the sliders

    $thumbnailSlider.slick(thumbnailSettings);
    $productSlider.slick(productSettings);
  });
})();

//# sourceMappingURL=script.transpiled.js.map
