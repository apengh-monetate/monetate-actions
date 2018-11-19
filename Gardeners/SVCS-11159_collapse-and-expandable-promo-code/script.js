(function($) {
  var trigger = $('#mtPromoCodeTrigger');
  var promoContainer = $('div.cart-coupon-code');
  promoContainer.hide();

  trigger.on('click', function() {
    promoContainer.toggle();
  });
}(jQuery));
