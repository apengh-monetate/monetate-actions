(function() {
    var selectors = [
        '.mt_hero .mt_hero__link',
        '.mt_bucket .mt_bucket__link',
        '.mt_slider .mt_slide__link'
    ];

    window.onload = function() {
        var selectorString = selectors.toString();
        var links = document.querySelectorAll(selectorString);
        console.log(links);

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
