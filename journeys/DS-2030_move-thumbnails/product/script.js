(function() {
    // Get Slider
    var slider = jQuery('#altViewsWrapper .alt-views-carousel.slick-initialized');

    // Get Original Settings
    var slickSettings = slider.slick('getSlick')['originalSettings'];

    // Unslick
    slider.slick('unslick');

    // Make changes
    var slide = slider.find('a:last');
    var target = slider.find('a:first');
    target.before(slide);

    // Re-initialize
    slider.slick(slickSettings);
    slider.slick('refresh');
})(jQuery);



const imageSrc = 'https://images.journeys.com/images/products/1_5122_FS_B-LIFESTYLE1.JPG';
const regexp = new RegExp('lifestyle1.jpg', 'gi');
