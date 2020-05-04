(function() {
    var quickLinks = document.querySelector('.mt_quick-links');
    var categoryName = window.digitalData.search.Goesto;

    if (quickLinks && categoryName) {
        var activeLink = quickLinks.querySelector('a[data-category-name="'+categoryName+'"]');
        if (activeLink) {
            activeLink.classList.add('mt_active');
        }
     }
})();
