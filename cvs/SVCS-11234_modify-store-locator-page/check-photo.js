(function() {
    var $photoCheckbox = $("#searchFilter2 > li input[type='checkbox']#Photo_Flag");

    // If not checked, set to checked
    if( $photoCheckbox.is(":checked") == false ) {
        $photoCheckbox.attr('checked', true);
    }
})();
