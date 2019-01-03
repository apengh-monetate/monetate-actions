(function() {
    console.log('FORM SUBMIT LISTENER');
    $( '#mtFormBanner' ).ajaxComplete(function() {
        console.log('AJAX COMPLETE');
        console.log('CLEAR INPUT');
        $( '#mtFormBanner' ).find('input[clickzone="email"]').val('');
    });
})();
