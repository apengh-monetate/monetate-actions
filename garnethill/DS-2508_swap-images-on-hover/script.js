(function() {
    jQuery('.unbxd-grid-product-image:not(.mt-swapped)').each(function() {
        var altSrc = this.getAttribute('data-alternative');
        altSrc = altSrc.replace(/([\d]*)(_alt1)/g, '$1_alt4');

        this.setAttribute('data-alternative', altSrc);
        this.classList.add('mt-swapped');
    });
})();
