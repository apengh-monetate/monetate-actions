(function() {
    var cartTotal = document.querySelector('td[data-cart-total]');
    var cartSubtotal = document.querySelector('td[data-cart-subtotal]');
    var elementsToHide = ['cart_estshipping', 'cart_esttax', 'cart_services_and_warranties'];

    // Hide specific elements
    function hideElements() {
        for(var i = 0; i < elementsToHide.length; i++) {
            var element = elementsToHide[i];

            var node = document.getElementById(element);
            if(node) {
                var parentEl = node.parentElement;
                parentEl.style.display = "none";
            }
        }
    }

    // Update subtotal to match total
    function updateSubtotal() {
        cartSubtotal.innerText = cartTotal.innerText;
    }


    // Mutation observer to observe for change to cart total
    var config = {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true
    };

    // Callback function to execute when mutations are observed
    var callback = function(mutationsList, observer) {
        for(var i = 0; i < mutationsList.length; i++) {
            if (mutationsList[i].type == 'characterData') {
                updateSubtotal();
                hideElements();
            }
        }
    };

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(cartTotal, config);


    hideElements();
    updateSubtotal();
})();
