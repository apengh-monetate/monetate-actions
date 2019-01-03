(function() {
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }

    if(isMobileDevice()) {
        document.getElementById('mtShopByCategory').scrollIntoView();
    }
})();
