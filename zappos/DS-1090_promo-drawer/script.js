// ==================================================================
// API Event - Clicks on Each Promo
// ==================================================================
(function() {

    // Polyfill for Element.closest function
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
    }
    if (!Element.prototype.closest) {
        Element.prototype.closest = function(s) {
            var el = this;

            do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };
    }


    var promos = document.querySelectorAll('#mt-promo-drawer li[data-slide] a');
    if(promos.length) {
        for(var i = 0; i < promos.length; i++) {
            promos[i].addEventListener('click', function(event) {
                var dataPromoEventValue = this.getAttribute('data-promo-event-value');
                if (!dataPromoEventValue) {
                    var dataSlide = this.closest('li[data-slide]');
                    var dataPromoEventValue = dataSlide.getAttribute('data-slide');
                    dataPromoEventValue = 'Promo_' + (parseInt(dataPromoEventValue) + 1);
                }

                window.monetateQ = window.monetateQ || [];
                window.monetateQ.push([
                    "trackEvent",
                    [dataPromoEventValue]
                ]);
            });
        }
    }
})();
