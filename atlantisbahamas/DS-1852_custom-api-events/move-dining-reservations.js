(function() {
    var selectors = [
        '#navigation li.px-2 a[href*="dining/dining-reservations"]',
        'footer a[href*="dining/dining-reservations"]'
    ]

    for(var i = 0; i < selectors.length; i++) {
        var selector = selectors[i];
        if (document.querySelector(selector)) {
            var element = document.querySelector(selector);
            element.addEventListener('click', function() {
                window.monetateQ = window.monetateQ || [];
                window.monetateQ.push([
                    "trackEvent",
                    ["DiningReservationsLink"]
                ]);
            });
        }
    }
})();
