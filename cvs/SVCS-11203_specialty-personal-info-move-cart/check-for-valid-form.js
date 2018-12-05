(function() {
  var form = document.querySelector('div.row.personal-info-pg form.form[name="mainForm"]');
  var button = document.querySelector('div.row.personal-info-pg button.cart_checkout-btn.primary-btn.ng-scope');
  var validClass = 'ng-valid';
  var invalidClass = 'ng-invalid';

  var checkForClass = setInterval(function() {
    if(form.classList.contains(invalidClass)) {
      button.setAttribute('disabled', true);
    } else if(form.classList.contains(validClass)) {
      button.removeAttribute('disabled');
    }
  }, 100);

})();
