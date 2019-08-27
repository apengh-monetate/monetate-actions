(function() {

    var editPrefBtn = '.account-panel_edit-btn[aria-label="Edit alert preferences"]';
    var agreeAndSaveBtn = '.primary-btn.account-panel_section_form_submit-btn[aria-describedby="agree-and-save-disclaimer"]';

    // Poll for element
    function pollForElement(selector, callback) {
        console.log('Poll for element', selector);
        if ( document.querySelector(selector) ) {
            callback();
        } else {
            setTimeout(function () {
                pollForElement(selector, callback);
            }, 100);
        }
    }


    pollForElement(editPrefBtn, function() {
        console.log(editPrefBtn, 'found');
        var editButton = document.querySelector(editPrefBtn);
        if (editButton) {
            editButton.addEventListener('click', function() {

                pollForElement(agreeAndSaveBtn, function() {
                    console.log(agreeAndSaveBtn, 'found');
                    var agreeButton = document.querySelector(agreeAndSaveBtn);
                    if (agreeButton) {
                        agreeButton.addEventListener('click', function(event) {
                            console.log('Send Custom API Event');
                            window.monetateQ = window.monetateQ || [];
                            window.monetateQ.push([
                                'trackEvent',
                                ['SP Agree and Save Text Pref'] // Monetate API Event Name
                            ]);
                        });
                    }
                });

            });
        }
    });
})();
