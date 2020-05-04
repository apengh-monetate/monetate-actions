(function() {
    // Get all of the products
    var products = document.querySelectorAll('#search-result-items .js-category-grid-product');

    for (var i = 0; i < products.length; i++) {
        var product = products[i];

        // Check for swatches
        var swatchContainer = product.querySelector('.swatches-cont');
        var hasSwatches = swatchContainer.querySelector('ul.swatch-list') ? true : false;

        if (hasSwatches) {
            // Generate the HTML for the 'More colors' link
            var link = product.querySelector('a.thumb-link');
            var html = '<div class="availability_msg">' +
                '<a href="'+ link.href +'" title="View All Colors" class="product-swatches-all">More colors available</a>' +
            '</div>';

            // Replace with 'More colors available' link
            swatchContainer.innerHTML = html;
        }
    }
})();
