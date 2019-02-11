(function() {
    console.error('Detect dataLayer.push event');
    var targetEvent = 'pdpSizeAjaxLoadComplete';
    window.addEventListener(targetEvent, function() {
        console.error('pdpSizeAjaxLoadComplete Fired!');
    });
})();
