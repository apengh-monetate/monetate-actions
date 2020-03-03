(function() {
    var promoDrawer = document.querySelector('#mt-promo-drawer');
    var slides = promoDrawer.querySelectorAll('li[data-slide]:not([data-slide-clone])');

    // Loop through each of the slides
    for (var i = 0; i < slides.length; i++) {
        // Current slide
        var slide = slides[i];

        // Send API Event on Copy Code Button Click
        var copyCodeBtn = slide.querySelector('button[name=mtCopyPromoCode], [data-copy-promo-code]');
        if (copyCodeBtn) {
            copyCodeBtn.addEventListener('click', function() {
                window.monetateQ = window.monetateQ || [];
                window.monetateQ.push([
                    'trackEvent',
                    ['copyPromoCodeClick'] // Name(s) of API Event
                ]);
            });
        }
    }
})();
