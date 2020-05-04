(function($) {
    // Polling function
    var poll = function(isReady, onReady, opt_onTimeout) {
        var interval = 50;
        var timeout = 4000;
        (function() {
            if (isReady()) {
                onReady();
            } else {
                if (timeout > 0) {
                    timeout -= interval;
                    setTimeout(/** @type {function()} */ (arguments.callee), interval);
                } else {
                    if (opt_onTimeout) {
                        opt_onTimeout();
                    }
                }
            }
        })();
    };

    // Function to swap the data-alternative and data-mainimage attributes
    var swapAttributeValues = function() {
        // Get all of the images that haven't been swapped
        var $images = $('.unbxd-grid-product-image:not(.mt-swapped)');
        $images.each(function() {
            var altSrc = $(this).attr('data-alternative');
            var mainSrc = $(this).attr('data-mainimage');
            $(this).attr('data-alternative', mainSrc);
            $(this).attr('data-mainimage', altSrc);
            $(this).addClass('mt-swapped');
        });
    };

    // Function to set the src attribute to the value of data-mainimage on scroll
    var setSrc = function() {
        var $images = $('.unbxd-grid-product-image[src]');
        $images.each(function() {
            var mainSrc = $(this).attr('data-mainimage');

            // Only set the src if it doesn't already equal data-mainimage
            if ($(this).attr('src') !== mainSrc) {
                $(this).attr('src', mainSrc);
            }
        });
    };


    /**
     * Poll for the Unbxd visitTime to ensure images have loaded
     */
    var isReady = function() {
        // Apply 'masking'
        $('.unbxd-products-dispaly-container').css('visibility', 'hidden');

        var unbxdLoaded = (window.Unbxd && window.Unbxd.visitTime && window.Unbxd.visitTime > 0) ? true : false;
        return unbxdLoaded;
    };


    /**
     * On ready
     * Swap the image attribute values and then set the src attribute
     * Remove the "masking"
     */
    var onReady = function() {
        swapAttributeValues();
        setSrc();
        $('.unbxd-products-dispaly-container').css('visibility', 'visible'); // Remove 'masking'
    };


    /**
     * On timeout
     * Remove the "masking"
     */
    var onTimeout = function() {
        $('.unbxd-products-dispaly-container').css('visibility', 'visible'); // Remove 'masking'
    };


    // Initialize the polling
    poll(isReady, onReady, onTimeout);
})(jQuery);
