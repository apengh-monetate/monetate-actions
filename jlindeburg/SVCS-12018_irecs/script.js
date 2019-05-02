$('.mt-slide').on('click', function(e) {
    e.stopPropagation();
});

var slides = document.querySelectorAll('.mt-merch-item a');
for(var i = 0; i < slides.length; i++) {
    var slide = slides[i];
    slide.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}
