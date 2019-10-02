(function() {

    var promo = document.querySelector('#pdp-main .product-discount-price');
    var priceRegex = new RegExp(/(\$\d*\.\d*)/, 'g');

    if (promo) {
        var text = promo.innerHTML;

        // Wrap price in a span and change color to red
        promo.innerHTML = text.replace(priceRegex, '<span class="mt_pdp-promo-price" style="color: #ff0000;">$1</span>');

        // Change promo text to bold
        promo.setAttribute('style', 'font-weight: bold !important');
    }
})();
