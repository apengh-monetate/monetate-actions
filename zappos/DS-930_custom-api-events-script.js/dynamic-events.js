(function() {

    var targetEventAttribute = 'data-monetate-id';
    var pageIdAttribute = 'data-page-id';
    var components = [
        'melodyGrid',
        'melodyHeroFull',
        'melodyCurated',
        'melodyPromoGroup',
        'melodyEditorialPromo',
        'melodyHero',
        'melodySplitEditorial'
    ];

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

    pollForElement('#root iframe[title="Intentionally blank"]', function() {
        var pageId = document.querySelectorAll('['+pageIdAttribute+']')[0];
        if (pageId) {
            pageId = pageId.getAttribute(pageIdAttribute);

            var eventLabels = document.querySelectorAll('['+pageIdAttribute+'="'+pageId+'"] [data-eventlabel]['+targetEventAttribute+']');
            for (var i = 0; i < eventLabels.length; i++) {
                var eventLabel = eventLabels[i];
                var eventLabelValue = eventLabel.getAttribute('data-eventlabel');

                if (components.includes(eventLabelValue)) {
                    var eventValue = eventLabel.getAttribute(targetEventAttribute);
                    var monetateEvent = pageId + '__' + eventValue;
                    console.log(monetateEvent);

                    eventLabel.addEventListener('click', function() {
                        var value = this.getAttribute(targetEventAttribute);
                        var monetateEvent = pageId + '__' + value;

                        // Send Monetate API Event
                        window.monetateQ = window.monetateQ || [];
                        window.monetateQ.push([
                            "trackEvent",
                            [monetateEvent, "CTACasingTotalClicks"]
                        ]);
                    });
                }
            }


            // Product Grid
            var productGrids = document.querySelectorAll('['+pageIdAttribute+'="'+pageId+'"] ['+targetEventAttribute+'="Product-Grid"]');
            if (productGrids) {
                for (var i = 0; i < productGrids.length; i++) {
                    var productGrid = productGrids[i];
                    var eventLabel = productGrid.querySelector('a[data-eventlabel]');
                    var monetateEvent = pageId + '__Product-Grid';
                    console.log(monetateEvent);

                    eventLabel.addEventListener('click', function() {
                        var monetateEvent = pageId + '__Product-Grid';

                        // Send Monetate API Event
                        window.monetateQ = window.monetateQ || [];
                        window.monetateQ.push([
                            "trackEvent",
                            [monetateEvent, "CTACasingTotalClicks"]
                        ]);
                    });
                }
            }

        }
    });

})();
