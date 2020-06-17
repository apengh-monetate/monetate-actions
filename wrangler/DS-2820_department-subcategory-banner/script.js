(function() {
    var URL_PATTERNS = {
        'mtCargo': '/shop/men-featured-cargo-styles',
        'mtBestOfWrangler': '/shop/men-featured-best-of-wrangler',
        'mtCowboy': '/shop/men-featured-collections-cowboy-cut'
    };

    for (var i = 0; i < Object.keys(URL_PATTERNS).length; i++) {
        var key = Object.keys(URL_PATTERNS)[i];
        var value = Object.values(URL_PATTERNS)[i];
        
        var regex = new RegExp(value, 'g');
        if (regex.test(window.location.pathname)) {
            var link = document.querySelector('#' + key);
            if (link) {
                link.classList.add('mt_active');
            }
        }
    }
})();