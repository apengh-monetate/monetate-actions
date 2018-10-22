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


  // You May Also Like
  var ymal = document.querySelectorAll('.crosssell .owl-item');
  for (var i = 0; i < ymal.length; i++) {
    // Add style number
    var link = ymal[i].querySelector('.product-image');
    var href = link.href;
    var styleNum = href.replace(/\//g, '').split('-');
    styleNum = styleNum[styleNum.length-2] + '-' + styleNum[styleNum.length-1];

    var h4 = document.createElement('h4');
    h4.classList.add('style-number');
    h4.innerText = 'Style No. ' + styleNum.toUpperCase();
    ymal[i].querySelector('.product-name').appendChild(h4);

    // Add "Add to Cart" button
    var productId = ymal[i].querySelector('.jq-product-img').id.split('-');
    productId = productId[productId.length-1];
    var dataHref = 'https://staging.eileenfisher.com/catalog/product/view/id/' + productId + '/?quickview=true';
    var div = document.createElement('div');
    div.classList.add('quickview');
    var span = document.createElement('span');
    span.classList.add('jq-qv');
    span.setAttribute('data-href', dataHref);
    span.innerText = 'ADD TO CART';
    var a = document.createElement('a');
    a.href = href;
    a.innerText = 'ADD TO CART';

    div.appendChild(span);
    div.appendChild(a);
    ymal[i].querySelector('.price-block').appendChild(div);
  }

})();
