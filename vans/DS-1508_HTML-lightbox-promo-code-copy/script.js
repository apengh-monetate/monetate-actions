// ==================================================================
// Click-to-Copy Functionality
// ==================================================================
(function() {
    var copyBtn = document.getElementById('mtCopyPromoCode');
    copyBtn.addEventListener('click', function() {
        console.log('Copy button clicked');

        /* Get the text field */
        var promoCode = document.getElementById('mtPromoCode');
        console.log(promoCode);

        /* Select the text field */
        promoCode.select();

        /* Copy the text inside the text field */
        document.execCommand("copy");

        var tooltip = document.querySelector('.mt-lightbox__tooltip');
        tooltip.innerHTML = "Copied: " + promoCode.value;

    });
})();
