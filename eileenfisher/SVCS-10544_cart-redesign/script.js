// Set placholders
var giftcardCode = document.getElementById('ebay_enterprise_giftcard_code');
giftcardCode.placeholder = 'XXXX XXXX XXXX XXXX';
var giftcardPin = document.getElementById('ebay_enterprise_giftcard_pin');
giftcardPin.placeholder = 'PIN #';





(function() {
  // Get Quantity
  var quantity = 0;
  var quantityInputs = document.getElementsByClassName('jq-cart-qty');
  for(var i = 0; i < quantityInputs.length; i++) {
    var value = quantityInputs[i].value;
    quantity += parseInt(value);
  }

  // Insert HTML
  var html = '<p class="page-title__items">(<span class="page-title__qty">&nbsp;</span> items)</p>';
  var pageTitle = document.querySelector('.cart > .page-title > h1');
  pageTitle.insertAdjacentHTML('afterend', '<p class="page-title__items">(<span class="page-title__qty">&nbsp;</span> items)</p>');

  var headerQuantity = document.getElementsByClassName('page-title__qty')[0];
  if(headerQuantity) {
    headerQuantity.innerText = quantity;
  }

  // Format Product Titles
  var productNames = document.querySelectorAll('h2.product-name a');
  for (var i = 0; i < productNames.length; i++) {
    productNames[i].textContent = productNames[i].textContent.split('-')[0];
  }

  // Remove Scene 7 Url Preset
  var productImages = document.querySelectorAll('.jq-cart-item .image-wrapper img');
  for (var i = 0; i < productImages.length; i++) {
    productImages[i].src = productImages[i].src.split('$')[0];
  }
})();
