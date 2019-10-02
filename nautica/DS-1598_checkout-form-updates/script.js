(function () {

    function generatePlaceholder(labelText, isRequired) {
        var placeholder;
        if (isRequired) {
            placeholder = '* ' + labelText;
        } else {
            placeholder = labelText;
        }
        return placeholder;
    }


    function editFormPlaceholders(formRows) {
        // Loop through each form row
        formRows.each(function(index) {
            var label = $(this).find('label');
            var labelText = label.find('span:first').text().trim();
            var isRequired = (label.find('.required-indicator').length !== 0) ? true : false;

            // Text/Email Inputs
            var input = label.next('input:enabled');
            if (input.length > 0) {

                // Generate placeholder text from label
                var placeholder = generatePlaceholder(labelText, isRequired);

                // If there is an existing placeholder, prepend new placeholder text
                if (input.attr('placeholder') !== undefined) {
                    placeholder += ' (' + input.attr('placeholder') + ')';
                }

                // Update placeholder attribute
                input.attr('placeholder', placeholder);
            }


            // Selects/Dropdowns
            var select = label.next('.styled-select');
            if (select.length > 0) {
                // Generate placeholder text from label
                var placeholder = generatePlaceholder(labelText, isRequired);
                select.find('a.select2-default > span:first').text(placeholder);
            }

        });
    }


    // ==================================================================
    // Update 1. Shipping
    // ==================================================================
    var $shippingForm = $('#address-form');
    if ($shippingForm) {
        var $formRows = $shippingForm.find('.form-row');
        editFormPlaceholders($formRows);
    }

    // ==================================================================
    // Update 2. Payment
    // ==================================================================
    var $paymentOptions = $('#PaymentMethod_CREDIT_CARD');
    if ($paymentOptions) {
        var $formRows = $paymentOptions.find('.form-row');
        editFormPlaceholders($formRows);
    }

    // ==================================================================
    // Update 2. Payment Email
    // ==================================================================
    var $paymentEmail = $('.form-row-container.email-container');
    var label = $paymentEmail.find('label[for="dwfrm_billing_billingAddress_email_emailAddress"]');
    var labelText = label.text().trim();
    labelText = labelText.replace(/\•/g, '');
    var isRequired = (label.find('.required-indicator').length !== 0) ? true : false;

    var input = $paymentEmail.find('#dwfrm_billing_billingAddress_email_emailAddress');

    var emailPlaceholder = generatePlaceholder(labelText, isRequired);
    input.attr('placeholder', emailPlaceholder);

})();
