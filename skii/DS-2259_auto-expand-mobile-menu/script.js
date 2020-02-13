(function() {
    // Get the category menu
    var categoryMenu = document.querySelector('li[data-menu=".target-menu-2"]');
    if (categoryMenu) {
        // Add 'closed' and 'open' classes to link element
        var link = categoryMenu.querySelector('a.has-sub-menu');
        link.classList.add('closed');
        link.classList.add('open');

        // Add 'open' class to icon element
        var icon = link.querySelector('span.abs');
        icon.classList.add('open');

        // Set the container to display: block
        var container = categoryMenu.querySelector('ul.sub_cat_container');
        container.style.display = 'block';
    }
})();
