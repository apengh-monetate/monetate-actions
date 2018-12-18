(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var toggle = '#pdp-details-accordion > .accordion-header';

    // If collapsed, expand
    if(document.querySelector(toggle)) {
      document.querySelector(toggle).click();
    }
  });
})();








(function() {
  // document.addEventListener('readystatechange', function() {
  //   var toggle = '#pdp-details-accordion > .accordion-header';
  //
  //   // If collapsed, expand
  //   if(document.querySelector(toggle)) {
  //     document.querySelector(toggle).click();
  //   }
  // });


  var accordion = '#pdp-details-accordion';

  // Change Arrow
  document.querySelector(accordion).querySelector('.accordion-header > .toggle-arrow').classList.add('toggle-arrow-up');

  // Set .accordion-content to display: block
  document.querySelector(accordion).querySelector('.accordion-content').setAttribute('style', 'display: block;');

  // Set .accordion-content to aria-hidden: false
  document.querySelector(accordion).querySelector('.accordion-content').setAttribute('aria-hidden', 'false');

})();
