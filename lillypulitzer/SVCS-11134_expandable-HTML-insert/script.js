(function() {

  function initExpandable() {
    var trigger = $('[data-expandable-target]');
    var content = $('.' + $('[data-expandable-target]').attr('data-expandable-target'));

    // Hide Content
    content.hide();

    // Set Initial Trigger Text
    trigger.html(trigger.attr('data-collapsed-text'));

    // On Trigger Click
    trigger.on('click', function() {
      // Get data-expandable-status
      var status = content.attr('data-expandable-status');

      // If closed, open
      if(status === 'closed') {
        content.slideDown('slow', function() {
          content.attr('data-expandable-status', 'open');
          trigger.html(trigger.attr('data-expanded-text'));
        });

      // If open, close
      } else if (status === 'open') {
        content.slideUp('slow', function() {
          content.attr('data-expandable-status', 'closed');
          trigger.html(trigger.attr('data-collapsed-text'));
        });
      }
    });
  }


  if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1) {
    document.addEventListener('DOMContentLoaded', function(event) {
      initExpandable();
    });
  } else {
    initExpandable();
  }

})();
