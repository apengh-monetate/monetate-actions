(function() {
    console.log('Synchronize sliders');
    // Synchronize sliders
    var header = document.querySelector('#main-global-stripe-select');

    // Poll for element
    function pollForElement(selector, callback) {
        if ( document.querySelector(selector) ) {
            callback();
        } else {
            setTimeout(function () {
                pollForElement(selector, callback);
            }, 100);
        }
    }

    pollForElement('#promo-strip-carousel div[id*="mt-slider"]', function() {
        var mainCarousel = document.querySelector('#promo-strip-carousel div[id*="mt-slider"]');
        pollForElement('#promo-carousel div[id*="mt-slider"]', function() {
            var collapsibleCarousel = document.querySelector('#promo-carousel div[id*="mt-slider"]');

            // Prev Arrow Click
            var collapsiblePrevButton = collapsibleCarousel.querySelector('[data-prev-button]');
            collapsiblePrevButton.addEventListener('click', function() {
                var mainPrevButton = mainCarousel.querySelector('[data-prev-button]');
                mainPrevButton.click();
            });

            // Next Arrow Click
            var collapsibleNextButton = collapsibleCarousel.querySelector('[data-next-button]');
            collapsibleNextButton.addEventListener('click', function() {
                var mainNextButton = mainCarousel.querySelector('[data-next-button]');
                mainNextButton.click();
            });
        });
    });
})();
