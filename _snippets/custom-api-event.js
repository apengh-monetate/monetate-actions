(function() {
    // Array of selectors
    var selectors = [
        '#dwfrm_login .dwfrm_login_rememberme input#dwfrm_login_rememberme'
    ];

    // API Event Name
    var eventKey = 'remember_click';


    // **Don't need to change this**
    // Get the elements, loop through them, add event add event listener
    // On click, send Monetate API Event
    var elements = document.querySelectorAll(selectors);
    if(elements.length) {
        for(var i = 0; i < elements.length; i++) {
            var element = elements[i];
            elements[i].addEventListener('click', function() {
                if(!element.checked) {
                    window.monetateQ = window.monetateQ || [];
                    window.monetateQ.push([
                        "trackEvent",
                        [eventKey]
                    ]);
                }
            });
        }
    }
})();
