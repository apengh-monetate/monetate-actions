"use strict";

(function ($) {
  var $topLevelCategories = $('ul.menu-category > li.toplevelcategory');
  $topLevelCategories.each(function (index) {
    // Get the Browse All link (the first link in the flyout menu)
    var $link = $(this).find('div.category-flyout a:first'); // Get the top level category link (button)

    var $button = $(this).find('button.menu-item-text-toggle');
    var newButton = $button.clone(); // Clone the existing button

    newButton.addClass('mt_top-level-button'); // Add a class

    $button.after(newButton); // Insert after original button

    $button.hide(); // Hide original button
    // Upon clicking the cloned button, redirect to Browse All link

    newButton.on('click', function () {
      if ($link && $link.prop('href')) {
        window.location.href = $link.prop('href');
      }
    });
  });
})(jQuery);

//# sourceMappingURL=script.transpiled.js.map
