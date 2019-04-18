"use strict";

(function () {
  var jSlider = jQuery('.slider.hero-slider'); // Get Slider

  var slickSettings = jSlider.slick('getSlick')['originalSettings']; // Get Original Settings

  jSlider.slick('unslick'); // Unslick

  jSlider.slick(slickSettings); // Re-initialize
})(jQuery);

//# sourceMappingURL=slick.compile.js.map
