var monetatePendo = (function() {

    function closeGuide() {
        var guide = document.querySelector('#pendo-guide-container');
        var close = guide.querySelector('._pendo-close-guide');
        close.click();
    }

    return {
        closeGuide: closeGuide
    }
})();
