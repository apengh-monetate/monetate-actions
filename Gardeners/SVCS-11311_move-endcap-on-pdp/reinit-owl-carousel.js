(function() {
  // Get owl carousel
  var owlCarousel = $('#product-content .owl-carousel');

  // get owl instance from element
  var owlInstance = owlCarousel.data('owlCarousel');

  // if instance is existing
  if(owlInstance != null) {
    owlInstance.reinit();
  }
})();
