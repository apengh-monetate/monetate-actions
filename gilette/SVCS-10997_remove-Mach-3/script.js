$(document).ready(function(){
  // Remove the Mach3 from the mobile slick slider
  var $slider = jQuery('#search-result-items.slick-initialized'); // get the main slider
  var slickSettings = $slider.slick('getSlick').originalSettings; // save the settings
  $slider.slick('unslick'); // unslick the slider
  jQuery('.search-result-items-thumbs > .grid-image[data-positionreset="2"]').remove(); // remove the thumbnail
  $slider.find('.grid-tile:has(img[alt~="Mach3"])').remove(); // remove the slide
  $slider.slick(slickSettings); // reslick the slider with original settings


  // Remove Mach3 reviews from the slider
  var $reviews = jQuery('#review_products.slick-initialized'); // get the reviews slider
  var reviewSettings = $reviews.slick('getSlick').originalSettings; // save the settings
  $reviews.slick('unslick'); // unslick the slider
  $reviews.find('div[itemprop="review"]:contains(Mach3)').remove();
  $reviews.find('div[itemprop="review"]:contains(mach3)').remove();
  $reviews.find('div[itemprop="review"]:contains(Mach 3)').remove();
  $reviews.find('div[itemprop="review"]:contains(mach 3)').remove();
  $reviews.slick(reviewSettings); // reslick the slider with original settings
});
