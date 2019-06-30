(function() {
    var banner = document.querySelector('.mt_enrollment-banner');
    if (banner) {
        banner.classList.remove('fixed');
        var distanceToTop = Math.max(banner.getBoundingClientRect().top, 50);
        window.addEventListener('scroll', function(ev) {
            var currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
            if (currentScrollY >= distanceToTop) {
                banner.classList.add('fixed');
            } else {
                banner.classList.remove('fixed');
            }
        });
    }
})();
