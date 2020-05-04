"use strict";

(function () {
  var mainImageRegex = new RegExp('\d*\_main', 'g');
  var altImageRegex = new RegExp('\d*\_alt1', 'g'); // Polling function

  var poll = function poll(isReady, onReady) {
    console.log('poll isReady', isReady());

    if (isReady()) {
      onReady();
    } else {
      setTimeout(function () {
        poll(isReady, onReady);
      }, 100);
    }
  }; // Function to collect thumbnails


  var getIndexThumbnails = function getIndexThumbnails() {
    var thumbnails = [];
    var products = document.querySelectorAll('.gwt-unbxd-product-info-panel');
    products.forEach(function (product) {
      var pid = product.getAttribute('data-custom');
      var image = product.querySelector('img.unbxd-grid-product-image');
      var dataAlternative = image.getAttribute('data-alternative');
      var dataMainimage = image.getAttribute('data-mainimage');
      thumbnails = thumbnails || [];
      thumbnails.push({
        pid: pid,
        image: image,
        dataAlternative: dataAlternative,
        dataMainimage: dataMainimage
      });
    });
    return thumbnails;
  };

  var swapAttributes = function swapAttributes() {
    console.groupCollapsed('swapAttributes');
    var image = thumb.image;
    console.log('image', image);
    var altSrc = thumb.dataAlternative;
    console.log('altSrc', altSrc);
    var mainSrc = thumb.dataMainimage;
    console.log('mainSrc', mainSrc);
    var alternative = image.getAttribute('data-alternative');
    console.log('alternative', alternative);
    var mainimage = image.getAttribute('data-mainimage');
    console.log('mainimage', mainimage);

    if (altImageRegex.test(alternative)) {
      console.log('Set data-alternative to the data-mainimage value');
      image.setAttribute('data-alternative', mainSrc);
    }

    if (mainImageRegex.test(mainimage)) {
      console.log('Set data-mainimage to the data-alternative value');
      image.setAttribute('data-mainimage', altSrc);
    }

    if (!altImageRegex.test(image.src)) {
      image.src = altSrc;
    }

    console.log('alternative', image.getAttribute('data-alternative'));
    console.log('mainimage', image.getAttribute('data-mainimage'));
    console.groupEnd();
  }; // Poll for the image src to be set
  // Poll for the color swatch src to be set


  var isReady = function isReady() {
    console.group('isReady', i);
    var image = thumb.image;
    console.log(image.src);
    console.log(image.offsetHeight);
    console.log('Ready:', image.src !== '' && image.offsetHeight > 0);
    console.groupEnd();
    return image.src !== '' && image.offsetHeight > 0;
  }; // Swap the data-alternative and data-mainimage attributes
  // Set the image src equal to the new data-mainimage attribute


  var onReady = function onReady() {
    console.group('onReady', i); // console.log(i, image.src);

    swapAttributes();
    window.addEventListener('scroll', swapAttributes);
    console.groupEnd();
  }; // Collect thumbs


  var thumbs = getIndexThumbnails();

  for (var i = 0; i < thumbs.length; i++) {
    console.groupCollapsed('image:', i);
    var thumb = thumbs[i];
    poll(isReady, onReady);
    console.groupEnd();
  }
})();

//# sourceMappingURL=new-script.transpiled.js.map
