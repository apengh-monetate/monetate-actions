(function() {
    var MD = '',
    PaRes = ''; /* Render the PayPal button*/
    paypal.Button.render({ /*Set your environment*/
        env: 'production', /* sandbox | production*/ /* Specify the style of the button*/
        style: {
            size: 'responsive', /* small | medium | large | responsive*/
            shape: 'rect', /* pill | rect*/
            color: 'silver',
            tagline: false
        },
        /* Wait for the PayPal button to be clicked */
        payment: function(data, actions) { /* Set up a payment and make credit the landing page */
            var SETEC_URL = '/paypal/method/paypal/init/';
            return paypal.request.post(SETEC_URL).then(function(res) {
                if (res.MD) {
                    MD = res.MD;
                    PaRes = res.PaRes;
                    return res.transactionId;
                } else {
                    if (res.errors) {
                        addErrorToPage(res.errors);
                    } else {
                        addErrorToPage(
                            'Sorry for the inconvenience, but we are currently unable to process paypal initialization (BP Code: PPINIT01). You can continue the checkout process using a credit card, or try again later for PayPal payment.'
                        );
                    }
                }
            });
        },
        /* Wait for the payment to be authorized by the customer*/
        onAuthorize: function(data, actions) {
            var SETEC_URL = '/paypal/method/paypal/auth/';
            return paypal.request.post(SETEC_URL, {
                MD: MD,
                PaRes: PaRes
            }).then(function(res) {
                if (res.errorNo == '0') {
                    window.location = res.redirect;
                } else {
                    if (res.errors) {
                        addErrorToPage(res.errors);
                    } else {
                        addErrorToPage(
                            'Sorry for the inconvenience, but we are currently unable to process paypal authentication (BP Code: PPAU02). You can continue the checkout process using a credit card, or try again later for PayPal payment.'
                        );
                    }
                }
            });
        }
    }, '#ppcheckoutinit');
})();
