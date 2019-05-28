(function() {
    // Poll for element
    function pollForObject(object, callback) {
        if ( typeof object === "object" ) {
            callback();
        } else {
            setTimeout(function () {
                pollForElement(object, callback);
            }, 100);
        }
    }

    pollForObject(__NEXT_DATA__, function() {
        var product = 1;
        var dataObject = __NEXT_DATA__.props.pageProps.products[product];
        dataObject.ean = "00047400665910";
        dataObject.id = "00047400665910";
        dataObject.price = 15;
        dataObject.product_promotions.promotional_price = 12;
        dataObject.short_name = "SkinGuard";
    });

})();
