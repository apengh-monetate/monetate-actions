"use strict";

(function () {
  console.log('MONETATE COLLAPSIBLE');
  var $trigger = $('[data-collapsible-trigger]');
  var $content = $('.' + $trigger.attr('data-collapsible-trigger'));
  console.log($trigger);
  console.log($content);
  $trigger.on('click', function () {
    var status = $(this).attr('data-collapsible-status');
    console.log(status);

    if (status === 'closed') {
      $content.slideDown("slow");
      $content.attr('data-collapsible-status', 'open');
      $(this).find('.image').removeClass('plus').addClass('minus');
      $(this).find('.image').attr('aria-label', 'collapse section');
      $(this).attr('data-collapsible-status', 'open');
    } else {
      $(this).attr('data-collapsible-status', 'closed');
      $(this).find('.image').attr('aria-label', 'expand section');
      $(this).find('.image').removeClass('minus').addClass('plus');
      $content.attr('data-collapsible-status', 'closed');
      $content.slideUp("slow");
    }
  });
})();

//# sourceMappingURL=script.compile.js.map
