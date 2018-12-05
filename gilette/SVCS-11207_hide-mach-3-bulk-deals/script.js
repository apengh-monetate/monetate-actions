(function() {

  // Remove the "slide"
  function initRemoveSlide(slide) {
    if( $(".search-result-items").hasClass("slick-initialized") ) {
      $(".search-result-items").slick("unslick");
    }
    $('.search-result-items-thumbs > .grid-image[data-positionreset="'+slide+'"]').remove(); // remove the thumbnail
    $(".search-result-items").find('.grid-tile[data-positionreset="'+slide+'"]').remove(); // remove the slide
  }


  // Remove the Mach3 from the mobile slick slider
  function initSlick() {
    if (!$(".search-result-items").hasClass("slick-initialized")) {
      // Sort .grid-tile
      var a = $(".search-result-items");
      a.find(".grid-tile").sort(function(a, b) {
        return +a.dataset.position - +b.dataset.position;
      }).appendTo(a);
      // Sort .grid-image
      var b = $(".search-result-items-thumbs");
      b.find(".grid-image").sort(function(a, b) {
        return +a.dataset.position - +b.dataset.position;
      }).appendTo(b);

      // Reinitialize slider using default code
      $(".search-result-items").slick({
        dots: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 4,
        touchMove: !1,
        adaptiveHeight: !0,
        customPaging: function(a, b) {
          return '<button class="tab">' + $(".search-result-items-thumbs li:nth-child(" + (b + 1) + ")").html() + "</button>";
        }
      });

      // Set attribute for slick dots and ensure dot image is being set
      $(".search-result-items-thumbs .grid-image").each(function(a) {
        $(".search-result-items .slick-dots li").eq(a).attr("data-positionreset", $(this).attr("data-positionreset"));
        $(".search-result-items .slick-dots li").eq(a).attr("data-productid", $(this).attr("data-productid"));
        $(".search-result-items .slick-dots li").eq(a).html('<button class="tab">' + $(this).html() + "</button>");
      });

      // Set active slide
      $(".search-result-items .slick-dots li").each(function() {
        if( $(this).attr("data-productid") == window.location.href.split("#")[1] ) {
          $(this).find("button").click();
        }
      });

      $(".search-result-items .slick-dots li").on("click", function(a) {
        a.preventDefault(),
        setTimeout(function() {
          $("html, body").animate({
            scrollTop: 0
          }, 500);
        }, 600);
      });
    }
  }



  // Select 'add free handle' by default
  function initCheckFreeHandle() {
    var freeHandle = document.querySelectorAll('input[type="checkbox"][name="freehandle"]');
    for(var i = 0; i < freeHandle.length; i++) {
      freeHandle[i].checked = true;
    }
  }

  if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1) {
    initCheckFreeHandle();
  } else {
    window.onload = function() {
      initRemoveSlide(1);
      initCheckFreeHandle();
      if( window.innerWidth <= 960 ) {
        initSlick();
      }
    };

    $(window).resize(function() {
      if( window.innerWidth <= 960 ) {
        initSlick();
      } else {
        if( $slider.hasClass("slick-initialized") ) {
          $slider.slick("unslick");
        }
      }
    });
  }

})();
