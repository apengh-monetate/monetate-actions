(function() {
    var selectors = [
        '#rlc-hp-hero a',
        '#bucket-group-women a',
        '#rlc-hp-banner-2 a',
        '#bucket-group-men a',
        '#rlc-hp-banner-3 a',
        '#rlc-multi-banner-slider-1 a',
        '#rlc-more-slider a'
    ];

    window.onload = function() {
        var selectorString = selectors.toString();
        var links = document.querySelectorAll(selectorString);

        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            if (link) {
                link.addEventListener('click', function() {

                    // Send Monetate API Event
                    window.monetateQ = window.monetateQ || [];
                    window.monetateQ.push([
                        "trackEvent",
                        ["RLHomepageTakeover"] // API Event Name(s)
                    ]);
                });
            }
        }
    };

})();
