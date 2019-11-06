(function() {
    var body = document.querySelector('body');
    var countdownBanner = document.querySelector('#wrapper > .mt_countdown');
    var countdownHeight = countdownBanner.offsetHeight;
    window.addEventListener('resize', function() {
        countdownHeight = countdownBanner.offsetHeight;
    });

    var scrollPosition = function() {
        return window.scrollY;
    };

    var toggleClass = function() {
        if (scrollPosition() === 0 || scrollPosition() <= countdownHeight) {
            body.classList.add('mt-relative');
        } else if (scrollPosition() > 0 && scrollPosition() > countdownHeight) {
            body.classList.remove('mt-relative');
        }
    };

    // On load
    toggleClass();

    // On scroll, toggle class on the body
    window.addEventListener('scroll', toggleClass);
})();
