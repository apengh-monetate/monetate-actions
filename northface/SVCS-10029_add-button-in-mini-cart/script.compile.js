"use strict";

require(['jquery', 'pubsub', 'domReady'], function ($, pubsub, domReady) {
  $.pubsub('subscribe', 'MINICART_CONTENT_RENDER_COMPLETE', function () {
    console.log('MINI CART RENDER COMPLETE');
    var $selector = $('.mini-cart-actions-item.cart-actions-item');
    var html = "<div class=\"mini-cart-actions-item cart-actions-item\" id=\"secureCheckout\">\n          <a href=\"https://www.thenorthface.com/webapp/wcs/stores/servlet/VFShippingAddressView?storeId=7001\" class=\"mini-cart-action button primary\">Checkout</a>\n      </div>";
    $selector.after(html);
  });
});

//# sourceMappingURL=script.compile.js.map
