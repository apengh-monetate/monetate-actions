(function() {
    var toggle = document.querySelector('#monetate_selectorHTML');
    var passwordField = document.querySelector('input#password');

    toggle.addEventListener('click', function(e) {
        var status = e.target.getAttribute('data-toggle-status');
        console.log(status);
        if (status === "show") {
            toggle.textContent = "Hide";
            toggle.setAttribute('data-toggle-status', 'hide');
            passwordField.setAttribute('type', 'input');
        } else {
            toggle.textContent = "Show";
            toggle.setAttribute('data-toggle-status', 'show');
            passwordField.setAttribute('type', 'password');
        }
    });
})();
