// ==================================================================
// Set banner height dynamically
// ==================================================================
(function() {
    var monetateBanner = document.querySelector('ul.product-grid > div[id*="monetate_selectorHTML"]');

    function setHeight() {
        var gridItem = document.querySelector('ul.product-grid > li.product-grid__cell');
        var gridItemHeight = gridItem.offsetHeight;
        monetateBanner.style.height = gridItemHeight + 'px';

        // Calculate the aspect ratio of the video and set iframe height = aspect ratio
        var iframe = monetateBanner.querySelector('iframe');
        var width = iframe.getAttribute('width');
        var height = iframe.getAttribute('height');
        if (width && height) {
            var heightRatio = Math.floor((height / width) * 100);
            iframe.style.height = heightRatio + '%';
        }
    }

    // Set height on page load
    setHeight();

    // Set height on window resize
    window.addEventListener('resize', setHeight);
})();
