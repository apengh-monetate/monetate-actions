(function () {
    console.groupCollapsed('Replace placeholder text from labels');

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
            console.groupCollapsed('formRow');
            var label = $(this).find('label');
            console.log('label', label);
            var labelText = label.find('span:first').text().trim();
            console.log('labelText', labelText);
            var isRequired = (label.find('.required-indicator').length !== 0) ? true : false;
            console.log('isRequired', isRequired);

            // Text/Email Inputs
            var input = $(this).find('input:enabled');
            console.log('input', input);
            if (input.length > 0) {

                // Generate placeholder text from label
                var placeholder = generatePlaceholder(labelText, isRequired);
                console.log('placeholder', placeholder);

                // Update placeholder attribute
                input.attr('placeholder', placeholder);
            }


            // Selects/Dropdowns
            var select = $(this).find('select.input-select:not(.country)');
            console.log('select', select);
            if (select.length > 0) {
                // Generate placeholder text from label
                var placeholder = generatePlaceholder(labelText, isRequired);
                var option = select.find('option:first');
                option.text(placeholder);
                option.attr('label', placeholder);
            }
            console.groupEnd();
        });
    }


    // ==================================================================
    // Update Shipping
    // ==================================================================
    var $shippingForm = $('.checkout-shipping.address');
    if ($shippingForm) {
        var $formRows = $shippingForm.find('.form-row');
        editFormPlaceholders($formRows);
    }

    // // ==================================================================
    // // Update Billing
    // // ==================================================================
    var $contactEmail = $('#dwfrm_billing fieldset:first');
    if ($contactEmail) {
        var $formRows = $contactEmail.find('.form-row:first');
        editFormPlaceholders($formRows);
    }

    var $paymentInfo = $('#dwfrm_billing .payment-method.payment-method-expanded');
    if ($paymentInfo) {
        var $formRows = $paymentInfo.find('.form-row');
        editFormPlaceholders($formRows);
    }


    console.groupEnd();
})();
