(function() {

    // Previous Guide on Element Click
    var previousGuideElement = pendo.dom('[name="previous"]') || pendo.dom('[data-guide-action="previous"]');
    console.log('Previous Guide Elements:', previousGuideElement.length);
    if(previousGuideElement) {
        for(var i = 0; i < previousGuideElement.length; i++) {
            step.attachEvent(previousGuideElement[i], 'click', function(e) {
                console.log('PREVIOUS BUTTON CLICKED');
                pendo.onGuidePrevious();
            });
        }
    }

    // Advance Guide on Element Click
    var advanceGuideElement = pendo.dom('[name="next"]') || pendo.dom('[data-guide-action="next"]');
    console.log('Advance Guide Elements:', advanceGuideElement.length);
    if(advanceGuideElement) {
        for(var i = 0; i < advanceGuideElement.length; i++) {
            step.attachEvent(advanceGuideElement[i], 'click', function(e) {
                console.log('ADVANCED BUTTON CLICKED');
                pendo.onGuideAdvanced();
            });
        }
    }

    // Dismiss Guide on Element Click
    var dismissGuideElement = pendo.dom('[name="dismiss"]') || pendo.dom('[data-guide-action="dismiss"]');
    console.log('Dismiss Guide Elements:', dismissGuideElement.length);
    if(dismissGuideElement) {
        for(var i = 0; i < dismissGuideElement.length; i++) {
            step.attachEvent(dismissGuideElement[i], 'click', function(e) {
                console.log('DISMISS BUTTON CLICKED');
                pendo.onGuideDismissed(); // Dismiss the current active guide
            });
        }
    }

    // Advance to Another Guide
    var showGuideElement = pendo.dom('[name="showGuide"]') || pendo.dom('[data-guide-action="showGuide"]');
    console.log('Show Guide Elements:', showGuideElement.length);
    if(showGuideElement) {
        for(var i = 0; i < showGuideElement.length; i++) {
            var guideId = showGuideElement[i].getAttribute('data-guide-id');
            console.log('guideId', guideId);
            
            step.attachEvent(showGuideElement[i], 'click', function(e) {
                console.log('SHOW GUIDE BUTTON CLICKED');
                pendo.onGuideDismissed(); // Dismiss the current active guide
                pendo.showGuideById(guideId); // This command will show the guide of the ID provided
            });
        }
    }

})(step,guide);
