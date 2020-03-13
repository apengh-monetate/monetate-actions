(function() {
    // Get Slider
    var slider = jQuery('.product-primary-image.slick-initialized.slick-slider');

    // Get Original Settings
    var slickSettings = slider.slick('getSlick')['originalSettings'];

    // Unslick
    slider.slick('unslick');

    // Make changes
    slickSettings['arrows'] = true;

    // Re-initialize
    slider.slick(slickSettings);
    slider.slick('refresh');
})(jQuery);
