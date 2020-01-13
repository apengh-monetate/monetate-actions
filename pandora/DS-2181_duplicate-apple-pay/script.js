(function() {

    var applePayButton = document.querySelector('button.apple-pay-button');
    var monetateButton = document.querySelector('#mtClonedApplePay');

    if (applePayButton && monetateButton) {
        monetateButton.addEventListener('click', function(event) {
            event.preventDefault();
            applePayButton.click();
        });
    }

})();
