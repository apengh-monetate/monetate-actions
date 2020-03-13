/*
 * JS to instantiate a dropdown menu
 * The selector will need to adjusted based on where the dropdown is being inserted.
 */

(function() {
    var selector = '#monetate_selectorHTML_98a8df77_1 .mt_nav-dropdown__desktop';

    function Dropdown(element) {
        this.element = element;
        this.trigger = this.element.querySelector('.mt_nav-dropdown__trigger');

        this.toggleDropdown = function() {
            var status = this.element.getAttribute('data-dropdown-status');
            if (status === 'closed') {
                this.element.setAttribute('data-dropdown-status', 'open');
            } else if (status === 'open') {
                this.element.setAttribute('data-dropdown-status', 'closed');
            }
        };

        // Toggle dropdown when clicked
        this.trigger.addEventListener('click', function(event) {
            event.preventDefault();
            this.toggleDropdown();
        }.bind(this), false);

        // Detect click outside of dropdown and close the dropdown, if open
        document.addEventListener('click', function(event) {
            var targetElement = event.target;
            do {
                if (targetElement === this.element) {
                    return;
                }
                targetElement = targetElement.parentNode;
            } while (targetElement);
            this.element.setAttribute('data-dropdown-status', 'closed');
        }.bind(this));
    };


    // Create new instance of dropdown
    var dropdown = document.querySelector(selector);
    if (dropdown) {
        dropdown = new Dropdown(dropdown);
    }
})();
