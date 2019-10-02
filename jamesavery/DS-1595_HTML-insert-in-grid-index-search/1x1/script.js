// ==================================================================
// Set banner height dynamically
// ==================================================================
(function() {
    var monetateBanner = document.querySelector('ul.product-grid > div[id*="monetate_selectorHTML"]');

    function setHeight() {
        var gridItem = document.querySelector('ul.product-grid > li.product-grid__cell');
        var gridItemHeight = gridItem.offsetHeight;
        monetateBanner.style.height = gridItemHeight + 'px';
    }

    // Set height on page load
    setHeight();

    // Set height on window resize
    window.addEventListener('resize', setHeight);
})();
