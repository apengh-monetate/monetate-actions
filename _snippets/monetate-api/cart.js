window.monetateQ = window.monetateQ || [];

// Set Page Type
window.monetateQ.push(['setPageType', 'cart']);

// Add Cart Rows
window.monetateQ.push([
    'addCartRows', [
        {
            productId: 'abc123',
            sku: 'abc123-001',
            quantity: '1',
            unitPrice: '99.99',
            currency: 'USD'
        },
        {
            productId: 'abc234',
            sku: 'abc234-001',
            quantity: '1',
            unitPrice: '99.99',
            currency: 'USD'
        }
    ]
]);

// Track Data
window.monetateQ.push(['trackData']);
