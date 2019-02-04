(function() {

    // Get all lightboxes
    var lightboxes = document.querySelectorAll('#monetate_lightbox');

    // Loop through them, see if it has our .mt-lightbox__video element
    for(var i = 0; i < lightboxes.length; i++) {
        if(lightboxes[i].querySelector('.mt-lightbox__video')) {
            var videoLightbox = lightboxes[i];
        }
    }

    var close = videoLightbox.querySelector('.mt-lightbox__close');
    var mask = videoLightbox.querySelector('#monetate_lightbox_mask');
    var video = videoLightbox.querySelector('#ytplayer');

    function stopVideo(element) {
        console.log('STOP PLAYBACK');
        element.src = '';
    }

    // On close click, stop video
    if(close) {
        close.addEventListener('click', function() {
            console.log('CLOSE CLICK');
            stopVideo(video);
        });
    }

    // On mouse click, sotp video
    if(mask) {
        mask.addEventListener('click', function() {
            console.log('MASK CLICK');
            stopVideo(video);
        });
    }

})();
