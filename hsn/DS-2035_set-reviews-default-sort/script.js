(function() {
    // Poll for element
    var pollForElement = function(selector, callback) {
        if (document.querySelector(selector)) {
            callback();
        } else {
            setTimeout(function () {
                pollForElement(selector, callback);
            }, 100);
        }
    }

    var callback = function() {
        var sortDropdown = document.getElementById('template-product-detail-reviews-sort');
        var sortBy = sortDropdown.querySelector('option[value="Descending,Date"]');

    };

    pollForElement('#product-detail-reviews', callback);
})();
