(function() {
    var selectors = [
        '#rlc-hp-hero a.rlc-hotspot',
        '#rlc-hp-hero a.rlc-link',
        '#bucket-group-1 .rlc-bucket.rlc-bucket-left a.rlc-hotspot',
        '#bucket-group-1 .rlc-bucket.rlc-bucket-left a.rlc-link',
        '#bucket-group-1 .rlc-bucket.rlc-bucket-right .rlc-slide[aria-posinset="1"] a.rlc-hotspot',
        '#bucket-group-1 .rlc-bucket.rlc-bucket-right .rlc-slide[aria-posinset="2"] a.rlc-hotspot',
        '#bucket-group-1 .rlc-bucket.rlc-bucket-right .rlc-slide[aria-posinset="3"] a.rlc-hotspot',
        '#bucket-group-1 .rlc-bucket.rlc-bucket-right .rlc-slide[aria-posinset="4"] a.rlc-hotspot',
        '#bucket-group-1 .rlc-bucket.rlc-bucket-right .rlc-slide[aria-posinset="5"] a.rlc-hotspot',
        '#bucket-group-1 .rlc-bucket.rlc-bucket-right .rlc-slide[aria-posinset="6"] a.rlc-hotspot',
        '#rlc-modernheritage-slider .rlc-slider .rlc-slide[aria-posinset="1"] a.rlc-hotspot',
        '#rlc-modernheritage-slider .rlc-slider .rlc-slide[aria-posinset="1"] .rlc-link',
        '#rlc-modernheritage-slider .rlc-slider .rlc-slide[aria-posinset="2"] a.rlc-hotspot',
        '#rlc-modernheritage-slider .rlc-slider .rlc-slide[aria-posinset="2"] .rlc-link',
        '#rlc-modernheritage-slider .rlc-slider .rlc-slide[aria-posinset="3"] a.rlc-hotspot',
        '#rlc-modernheritage-slider .rlc-slider .rlc-slide[aria-posinset="3"] .rlc-link',
        '#rlc-hp-hero-3 a.rlc-hotspot.rlc-hotspot1',
        '#rlc-hp-hero-3 a.rlc-link:nth-child(1)',
        '#rlc-hp-hero-3 a.rlc-link:nth-child(2)',
        '#bucket-group-2 .rlc-bucket.rlc-bucket-left .rlc-slide[aria-posinset="1"] a.rlc-hotspot',
        '#bucket-group-2 .rlc-bucket.rlc-bucket-left .rlc-slide[aria-posinset="2"] a.rlc-hotspot',
        '#bucket-group-2 .rlc-bucket.rlc-bucket-left .rlc-slide[aria-posinset="3"] a.rlc-hotspot',
        '#bucket-group-2 .rlc-bucket.rlc-bucket-left .rlc-slide[aria-posinset="4"] a.rlc-hotspot',
        '#bucket-group-2 .rlc-bucket.rlc-bucket-left .rlc-slide[aria-posinset="5"] a.rlc-hotspot',
        '#bucket-group-2 .rlc-bucket.rlc-bucket-left .rlc-slide[aria-posinset="6"] a.rlc-hotspot',
        '#bucket-group-2 .rlc-bucket.rlc-bucket-right a.rlc-hotspot',
        '#bucket-group-2 .rlc-bucket.rlc-bucket-right a.rlc-link',
        '#rlc-polobearshop-slider .rlc-slider .rlc-slide[aria-posinset="1"] a.rlc-hotspot',
        '#rlc-polobearshop-slider .rlc-slider .rlc-slide[aria-posinset="1"] a.rlc-link:nth-child(1)',
        '#rlc-polobearshop-slider .rlc-slider .rlc-slide[aria-posinset="1"] a.rlc-link:nth-child(2)',
        '#rlc-polobearshop-slider .rlc-slider .rlc-slide[aria-posinset="2"] a.rlc-hotspot',
        '#rlc-polobearshop-slider .rlc-slider .rlc-slide[aria-posinset="2"] a.rlc-link:nth-child(1)',
        '#rlc-polobearshop-slider .rlc-slider .rlc-slide[aria-posinset="2"] a.rlc-link:nth-child(2)',
        '#rlc-polobearshop-slider .rlc-slider .rlc-slide[aria-posinset="3"] a.rlc-hotspot.rlc-hotspot1',
        '#rlc-polobearshop-slider .rlc-slider .rlc-slide[aria-posinset="3"] a.rlc-hotspot.rlc-hotspot2',
        '#rlc-polobearshop-slider .rlc-slider .rlc-slide[aria-posinset="3"] a.rlc-link:nth-child(1)',
        '#rlc-polobearshop-slider .rlc-slider .rlc-slide[aria-posinset="3"] a.rlc-link:nth-child(2)'
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
