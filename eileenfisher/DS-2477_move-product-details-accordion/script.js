(function() {
    var accordion = document.querySelector('.product.data.items');
    if (accordion) {
        var openAccordion = accordion.querySelector('.data.item.jq-accordion.open');
        var firstAccordion = accordion.querySelector('.data.item.jq-accordion:nth-child(1)');
        var detailsAccordion = accordion.querySelector('.data.item.jq-accordion:nth-child(2)');

        // Move the Product Details to first position
        accordion.insertBefore(detailsAccordion, firstAccordion);

        // Close the currently open accordion
        openAccordion.classList.remove('open');
        openAccordion.querySelector('.content').style.display = '';


        // Open Product Details accordion
        detailsAccordion.classList.add('open');
        detailsAccordion.querySelector('.content').style.display = 'block';
    }

})();
