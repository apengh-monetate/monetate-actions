$(document).ready(function(){
  // Remove the Sensor3 from the mobile slick slider
  var $slider = jQuery('#search-result-items.slick-initialized'); // get the slider
  var slickSettings = $slider.slick('getSlick').originalSettings;  // save the settings
  $slider.slick('unslick'); // unslick the slider
  jQuery('.search-result-items-thumbs > .grid-image[data-positionreset="2"]').remove(); // remove the thumbnail
  $slider.find('.grid-tile:has(img[alt~="Mach3"])').remove(); // remove the slide
  $slider.slick(slickSettings); // reslick the slider with original settings
});
