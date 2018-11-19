(function() {
  var trigger = $('[data-expandable-target]');
  var content = $('.' + $('[data-expandable-target]').attr('data-expandable-target'));
  content.hide();
  trigger.on('click', function() {
    content.slideDown();
  });
})();
