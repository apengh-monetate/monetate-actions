const productToJson = () => {
    const modal = document.querySelector('.modal-overlay.product-detail-modal');
    const details = modal.querySelectorAll('table.product-search-detail tr');

    const product = {};
    details.forEach((detail) => {
        var field = detail.querySelector('td:nth-child(1)');
        field = field.textContent.trim();

        var keyArray = field.split('_');
        let key = '';
        keyArray.forEach((item, index) => {
            if (index > 0) {
                item = item.charAt(0).toUpperCase() + item.slice(1);
            }
            key += item;
        });

        var value = detail.querySelector('td:nth-child(2)');
        value = value.textContent.trim();

        if (value !== 'No Data Available' && key !== 'SentTime') {
            product[key] = value;
        }
    });

    // Sort by key
    const sorted = {};
    Object.keys(product).sort().forEach((key) => {
        sorted[key] = product[key];
    });

    console.log(sorted);
};

productToJson();
