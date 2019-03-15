"use strict";

(function () {
  var $miniCart = $('.js-mini-bag');
  var $miniCartButtons = $('.mini-bag-btns'); // Poll for element

  var pollForElement = function pollForElement(selector, callback) {
    if (document.querySelector(selector)) {
      callback();
    } else {
      setTimeout(function () {
        pollForElement(selector, callback);
      }, 100);
    }
  }; // Buttons HTML


  var html = '<div class="mt__buttons">\
        <div class="mt__button">\
            <a href="/cart" class="mt__button--btn mt__button--view-cart" title="VIEW CART">VIEW CART</a>\
        </div>\
        <div class="mt__button">\
            <a href="/login/checkout" class="mt__button--btn mt__button--checkout" title="CHECKOUT">CHECKOUT</a>\
        </div>\
    </div>'; // Hover over mini-cart

  $miniCart.hover(function () {
    // Poll for single checkout button
    pollForElement('.js-checkout', function () {
      $('.mini-bag-btns').html(html);
    });
  }); // Product Added to Cart

  $('#addToCartButton').on('click', function () {
    // Poll for single checkout button
    pollForElement('.js-checkout', function () {
      $('.mini-bag-btns').html(html);
    }); // Add mtShow Class

    $('.js-mini-bag-data').addClass('mtShow'); // Remove mtShow Class

    setTimeout(function () {
      $('.js-mini-bag-data').removeClass('mtShow');
    }, 8000);
  }); // Close mini-cart modal when clicking outside of modal

  $('body').on('click', function (event) {
    if ($('.js-mini-bag-data').hasClass('mtShow')) {
      var $target = $(event.target);

      if (!$target.closest('.mini-bag-container').length && $('.js-mini-bag-data').hasClass('mtShow') && event.target.id != 'addToCartButton') {
        $('.js-mini-bag-data').removeClass('mtShow');
      }
    }
  });
})();

//# sourceMappingURL=script.compile.js.map
