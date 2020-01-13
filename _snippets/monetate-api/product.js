window.monetateQ = window.monetateQ || [];

// Set Page Type
window.monetateQ.push(['setPageType', 'product']);

// Add Products
window.monetateQ.push([
    'addProductDetails', [
        {
            productId: 'abc123',
            sku: 'abc123-001'
        },
        {
            productId: 'abc234',
            sku: 'abc234-001'
        }
    ]
]);

// Track Data
window.monetateQ.push(['trackData']);
