(function() {
    var mtCategory = document.querySelectorAll('.mt-nav-category');
    for (var i = 0; i < mtCategory.length; i++) {
        var category = mtCategory[i];
        var heading = category.querySelector('.category-level-1');
        var content = category.querySelector('.category-level-2');
        if (heading && content) {
            heading.addEventListener('click', function(event) {
                event.preventDefault();
                heading.classList.toggle('mt-active-bar-item');
                content.classList.toggle('mt-active-category');
            });
        }
    }
})();
