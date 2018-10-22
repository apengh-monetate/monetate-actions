(function() {
  var loginBtn = document.querySelector('nav.widget-login-logout-modal a.cv-ico-general-login');
  loginBtn.addEventListener('click', function() {
    var fancybox = document.querySelector('.fancybox-overlay.fancybox-overlay-fixed');
    fancybox.classList.add('mt-login');
  });

  var modal = document.querySelector('.mt-login.mt-login-overlay');
  window.onclick = function(event) {
    console.log(event.target);
    if(event.target == modal) {
      console.log('CLOSE');
      //document.querySelector('.fancybox-close').click();
    }
  };

})();
