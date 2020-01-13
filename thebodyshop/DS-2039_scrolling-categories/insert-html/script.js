(function() {
    // Scroll the active link to the center of the screen
    var banner = document.querySelector('.mt_scrolling-cat');
    var $activeLink = $('.mt_scrolling-cat__active');
    if (banner && $activeLink) {
        var parent = $activeLink.closest('li');
        var width = $activeLink.width();
        var xPosition = parent.position().left;
        var windowWidth = $(window).width();
        banner.scrollLeft = xPosition - (windowWidth / 2) + (width / 2);
    }
})();
