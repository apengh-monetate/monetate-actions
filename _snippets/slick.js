(function() {
    // Get Slider
    var slider = jQuery('.altViews.slick-initialized');

    // Get Original Settings
    var slickSettings = slider.slick('getSlick')['originalSettings'];

    // Unslick
    slider.slick('unslick');


    var productSlider = jQuery('.item-details-wrapper .productImage');
    var productSettings = productSlider.slick('getSlick')['originalSettings'];
    productSlider.slick('unslick');

    // Make changes
    var slide = slider.find('div.slide:eq(4)');
    var target = slider.find('div.slide:eq(0)');
    target.before(slide);

    var slide = productSlider.find('div.slide:eq(4)');
    var target = productSlider.find('div.slide:eq(0)');
    target.before(slide);

    // Re-initialize
    slider.slick(slickSettings);
    productSlider.slick(productSettings);
})(jQuery);
