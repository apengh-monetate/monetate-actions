(function() {
    var breakpoint = 945;
    var header = document.querySelector('header.header');
    var topBanner = document.querySelector('body > div[id*="monetate_selectorHTML"]');

    var adjustTopBanner = function() {
        console.log(window.innerWidth);
        if (window.innerWidth <= breakpoint) {
            // Get the height of the banner
            var bannerHeight = topBanner.offsetHeight;
            console.log(bannerHeight);

            // Get the scroll position
            var scrollPosition = window.scrollTop;
            console.log(scrollPosition);

            // Set header top
            topBanner.position = 'absolute';
            topBanner.top = 0;

        } else {
            topBanner.position = 'relative';
            header.top = '';
        }

    };

    adjustTopBanner();
    window.addEventListener('scroll', adjustTopBanner);
    window.addEventListener('resize', adjustTopBanner);
})();
