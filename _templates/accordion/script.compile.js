"use strict";

(function () {
  function openAccordion(content, open, close) {
    content.slideDown();
    open.addClass('hide');
    close.removeClass('hide');
    content.attr('aria-hidden', false);
    content.attr('aria-expanded', true);
  }

  function closeAccordion(content, open, close) {
    content.slideUp();
    close.addClass('hide');
    open.removeClass('hide');
    content.attr('aria-hidden', true);
    content.attr('aria-expanded', false);
  }

  $('.mt_accordion').each(function (index) {
    var $accordion = $(this);
    var $heading = $accordion.find('.mt_accordion__heading');
    var $open = $accordion.find('.mt_accordion__toggle--open');
    var $close = $accordion.find('.mt_accordion__toggle--close');
    var $content = $accordion.find('.mt_accordion__content');
    $heading.on('click', function () {
      if ($content.attr('aria-hidden') === "true") {
        openAccordion($content, $open, $close);
      } else {
        closeAccordion($content, $open, $close);
      }
    });
  });
})();

//# sourceMappingURL=script.compile.js.map
