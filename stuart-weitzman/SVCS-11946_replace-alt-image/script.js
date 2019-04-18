// ==================================================================
// Update Alt Images on Index/Search
// ==================================================================
(function() {
    console.log('Update Alt Images on Index/Search');

    var altImageOrigString = '_06.jpg';
    var altImageReplaceString = '_alt07.jpg';

    // Considerations: Don't load image more than once

    function updateAltImgSrc(product) {
        var altImage = product.find('img.altImage');
        console.log('altImage:', altImage);
        // If alt image has src attribute with '_06.jpg'
        if(altImage.has('[src*="'+altImageOrigString+'"]')) {
            // Get original image src
            var altImageSrc = altImage.attr('src');
            console.log('altImageSrc:', altImageSrc);

            // Replace image src
            var newSrc = altImageSrc.replace('_06.jpg', '_alt07.jpg');

            // Update alt image src
            altImage.attr('src', newSrc);
        }
    }

    function getProducts() {
        return $('#itemContainer .itemWrapper');
    }



    // On Load, update visible images
    $(document).on('ready', function() {
        var products = getProducts();
        $.each(products, function(index) {
            var product = $(this);
            updateAltImgSrc(product);
        });
    });

    // On Hover, update alt image src

    // On scroll, update alt image src
    $(window).on('scroll', function() {
        var products = getProducts();
        $.each(products, function(index) {
            var product = $(this);
            updateAltImgSrc(product);
        });
    });

})();
