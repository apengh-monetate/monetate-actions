(function() {

  // Remove the Mach3 from the mobile slick slider
  function initRemoveSlide(index) {
    var $slider = jQuery('#search-result-items.slick-initialized'); // get the main slider
    $slider.slick('slickRemove', index); // Remove the slide
  }

  // Select 'add free handle' by default
  function initCheckFreeHandle() {
    var freeHandle = document.querySelectorAll('input[type="checkbox"][name="freehandle"]');
    for(var i = 0; i < freeHandle.length; i++) {
      freeHandle[i].checked = true;
    }
  }

  // Delay execution for IE11 due to timing issue
  if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1) {
    window.onload = function() {
      initCheckFreeHandle();
    };
  } else {
    initRemoveSlide(0);
    initCheckFreeHandle();
  }

})();
