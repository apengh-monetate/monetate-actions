(function() {
    var monetateExpandCollapse = document.querySelectorAll('[data-mt-expand]');
    console.log(monetateExpandCollapse.length);
    
    monetateExpandCollapse.forEach((element) => {
        var heading = element.querySelector('.drawer-top');
        var drawer = element.querySelector('.drawer');
        console.log(heading);
        console.log(drawer);
        heading.addEventListener('click', function() {
            if(drawer.classList.contains('open')) {
                drawer.classList.remove('open');
            } else {
                drawer.classList.add('open');
            }
        });
    });
})();
