window.monetateQ = window.monetateQ || [];

// Set Page Type
window.monetateQ.push(['setPageType', 'purchase']);

// Add Purchase Rows
window.monetateQ.push([
    'addCartRows', [
        {
            purchaseId: '100001',
            productId: 'abc123',
            sku: 'abc123-001',
            quantity: '1',
            unitPrice: '99.99',
            currency: 'USD'
        },
        {
            purchaseId: '100001',
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
