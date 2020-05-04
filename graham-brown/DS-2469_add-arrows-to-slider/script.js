(function() {
    // Poll for element
    function pollForFunction(functionName, callback) {
        if ( typeof functionName === 'function' ) {
            callback();
        } else {
            setTimeout(function () {
                functionName(functionName, callback);
            }, 100);
        }
    }

    // Poll for jQuery
    pollForFunction(jQuery, function() {
        // Poll for slick
        pollForFunction($.fn.slick, function() {
            // Get Slider
            var slider = jQuery('.product-primary-image.slick-initialized.slick-slider');

            // Get Original Settings
            var slickSettings = slider.slick('getSlick')['originalSettings'];

            // Unslick
            slider.slick('unslick');

            // Set arrows to true
            slickSettings['arrows'] = true;

            // Re-initialize
            slider.slick(slickSettings);
            slider.slick('refresh');
        });
    });

})();
