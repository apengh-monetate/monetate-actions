(function() {

    var accordion = document.querySelector('.mt_cart-accordion');

    if (accordion) {
        var heading = accordion.querySelector('.mt_cart-accordion__heading');
        var panel = accordion.querySelector('.mt_cart-accordion__panel');

        heading.addEventListener('click', function() {
            panel.classList.toggle('active');
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }

            var status = accordion.getAttribute('data-accordion-status');
            if (status === 'closed') {
                accordion.setAttribute('data-accordion-status', 'open');
                heading.setAttribute('aria-expanded', 'true');
            } else if (status === 'open') {
                accordion.setAttribute('data-accordion-status', 'closed');
                heading.setAttribute('aria-expanded', 'false');
            }
        });
    }

})();
