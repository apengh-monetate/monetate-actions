"use strict";

(function () {
  var $photoCheckbox = $("input#Photo_Flag"); // If not checked, set to checked

  if ($("input#Photo_Flag").is(":checked") == false) {
    $("input#Photo_Flag").attr('checked', true);
    clickCount += 1;
    $("#srchstorebtn").attr('value', 'Update results');
    $("#find_a_store_mobile").text('Update results');
    $('#loadMore .cvs-storeLoc-filter-count').text(clickCount + ' applied');
    $('#filterMore .cvs-storeLoc-filter-count').text(clickCount);
    $('.cvs-storeLoc-filter-count').css('display', 'inline-block');
  }
})(); // if ($(this).is(":checked")) {
//     clickCount += 1;
// } else {
//     clickCount -= 1;
// }
// if (clickCount) {
//     $("#srchstorebtn").attr('value', 'Update results');
//     $("#find_a_store_mobile").text('Update results');
//
//     $('#loadMore .cvs-storeLoc-filter-count').text(clickCount + ' applied');
//     $('#filterMore .cvs-storeLoc-filter-count').text(clickCount);
//     $('.cvs-storeLoc-filter-count').css('display', 'inline-block');
// } else {
//     $("#srchstorebtn").attr('value', 'Search');
//     $("#find_a_store_mobile").text('Search');
//
//     $('.cvs-storeLoc-filter-count').css('display', 'none');
// }

//# sourceMappingURL=check-photo.compile.js.map
