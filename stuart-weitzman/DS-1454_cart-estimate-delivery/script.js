(function() {

    // Poll for jQuery
    function pollForJquery(callback) {
        if ( typeof window.jQuery === "function" ) {
            callback();
        } else {
            setTimeout(function () {
                pollForJquery(callback);
            }, 100);
        }
    }

    // Init Accordion
    function initAccordion() {
        var $accordion = $('.mt_cart-accordion');

        if ($accordion) {
            var $heading = $accordion.find('.mt_cart-accordion__heading');
            var $panel = $accordion.find('.mt_cart-accordion__panel');

            $heading.on('click', function() {
                var status = $accordion.attr('data-accordion-status');
                $panel.slideToggle();
                if (status === 'closed') {
                    $accordion.attr('data-accordion-status', 'open');
                    $heading.attr('aria-expanded', 'true');
                } else if (status === 'open') {
                    $accordion.attr('data-accordion-status', 'closed');
                    $heading.attr('aria-expanded', 'false');
                }
            });
        }
    }

    pollForJquery(function() {
        initAccordion();
    });
})();
