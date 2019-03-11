(function() {

    // Poll for element
    var pollForElement = function(selector, callback) {
        if ( document.querySelector(selector) ) {
            callback();
        } else {
            setTimeout(function () {
                pollForElement(selector, callback);
            }, 100);
        }
    };

    // Buttons HTML
    var html = '<div class="mt__buttons">\
        <div class="mt__button">\
            <a href="/cart" class="mt__button--btn mt__button--view-cart" title="VIEW CART">VIEW CART</a>\
        </div>\
        <div class="mt__button">\
            <a href="/login/checkout" class="mt__button--btn mt__button--checkout" title="CHECKOUT">CHECKOUT</a>\
        </div>\
    </div>';


    // Mutation Observer
    var targetNode = document.getElementsByClassName('mini-cart-container')[0];
    var config = {
        attributes: true,
        childList: true,
        subtree: true
    };

    var callback = function(mutationsList, observer) {
        pollForElement('div.mini-bag-btns', function() {
            var miniBagButtons = document.getElementsByClassName('mini-bag-btns')[0];
            miniBagButtons.innerHTML = html;
        });

        // Stop observing
        observer.disconnect();
    };

    var observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

})();
