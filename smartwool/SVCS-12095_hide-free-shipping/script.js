(function() {

    function pollForElement(selector, callback) {
        if ( document.querySelector(selector) ) {
            callback();
        } else {
            setTimeout(function () {
                pollForElement(selector, callback);
            }, 100);
        }
    }

    pollForElement('script[src*="jquery.cycle2.carousel.min.js"]', function() {
        var $carousel = $('.topnav-promobar-carousel .carousel');
        var options = {
            "fx": "scrollHorz",
            "prev": $carousel.find(".cycle-prev"),
            "next": $carousel.find(".cycle-next"),
            "pagerTemplate": "<span></span>",
            "pauseOnHover": false,
            "timeout": 6000,
            "slides": "> .slide",
            "swipe": true,
            "maxZ": 49
        };

        // Destroy current cycle carousel
        $carousel.cycle('destroy');

        // Remove slides
        var $slides = $carousel.find('.slide');
        $slides.each(function(index) {
            console.log(index);
            console.log($(this));
            var hasFreeShipText = $(this).find('a:contains("FREE GROUND SHIPPING")').length ? true : false;
            if( hasFreeShipText ) {
                $(this).remove();
            }
        });

        // Re-init cycle carousel
        $carousel.cycle(options);
    });

})();
