(function() {
    var tippyTopSlider = document.querySelector('div[id*="mt-slider"]'),
        tippyTopSliderHeight = tippyTopSlider.clientHeight,
        menuItems = document.querySelectorAll('div.page .mega-menu > ul > li .megamenu-wrapper'),
        defaultMenuTopPosition = 119;

    function setMenuTopPosition(menuItems, defaultMenuTopPosition) {
        var windowTop = window.scrollY;
        for(var i = 0; i < menuItems.length; i++) {
            var top = defaultMenuTopPosition + (tippyTopSliderHeight - windowTop);
            menuItems[i].style.top = top + 'px';
        }
    }

    setMenuTopPosition(menuItems, defaultMenuTopPosition);

    window.addEventListener('scroll', function() {
        var windowWidth = window.innerWidth;
        var windowTop = window.scrollY;
        if(windowWidth >= 1025) {
            if(windowTop <= tippyTopSliderHeight) {
                setMenuTopPosition(menuItems, defaultMenuTopPosition);
            } else {
                for(var i = 0; i < menuItems.length; i++) {
                    menuItems[i].style.top = '0px';
                }
            }
        }
    });

})();
