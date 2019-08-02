(function() {
    var sizeSpan = document.querySelector('.mt_sizing-message .mt_sizing-message__text-size');
    var sizeSwatches = document.querySelectorAll('ul.size-swatches li');

    if (sizeSpan && sizeSwatches) {
        for (var i = 0; i < sizeSwatches.length; i++) {
            var swatch = sizeSwatches[i];
            swatch.addEventListener('click', function(event) {
                var link = this.querySelector('a');
                if (link) {
                    var currentSize = link.getAttribute('data-size');
                    sizeSpan.textContent = currentSize;
                }
            });
        }
    }
})();
