(function() {

    var sliderId = 'mt-slider-3098334-0';

    // Poll for element
    function pollForElement(selector, callback) {
        if ( document.querySelector(selector) ) {
            callback();
        } else {
            setTimeout(function () {
                pollForElement(selector, callback);
            }, 100);
        }
    }


    // ==================================================================
    // Mutation observer to start video playback when the slider changes
    // and the video slide is the active slide
    // ==================================================================
    var initMutationObserver = function() {
        // Select the node that will be observed for mutations
        var targetNode = document.getElementById(sliderId);

        // Options for the observer (which mutations to observe)
        var config = {
            attributes: true,
            childList: true,
            subtree: true
        };

        var slider = $('#'+sliderId);
        var slideWithVideo = slider.find('[data-slide]:has(video)');
        var slide = slideWithVideo.find('.mt_slide');
        var videos = slideWithVideo.find('video');

        // Callback function to execute when mutations are observed
        var callback = function(mutationsList, observer) {
            var slideActive = slideWithVideo.attr('data-slide-active');
            if (typeof slideActive !== typeof undefined && slideActive !== false) {
                var videos = document.querySelectorAll('#'+sliderId+' [data-slide-active] video');
                for (var i = 0; i < videos.length; i++) {
                    var video = videos[i];
                    video.play();
                    slide.addClass('playing').removeClass('paused');
                }
                observer.disconnect();
            }
        };

        // Create an observer instance linked to the callback function
        var observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    };


    // ==================================================================
    // Toggle Video Playback on Play/Pause Button Click
    // ==================================================================
    var toggleVideoPlayback = function() {
        var slider = $('#'+sliderId);
        var slideWithVideo = slider.find('[data-slide]:has(video)');
        var slide = slideWithVideo.find('.mt_slide');
        var videos = document.querySelector('#'+sliderId).querySelectorAll('video');
        var playPauseButton = slide.find('.mt_slide__video-btn');

        function pause(slide, videos) {
            for (var i = 0; i < videos.length; i++) {
                var video = videos[i];
                video.pause();
                slide.addClass('paused').removeClass('playing');
            }
        }
        function play(slide, videos) {
            for (var i = 0; i < videos.length; i++) {
                var video = videos[i];
                video.play();
                slide.addClass('playing').removeClass('paused');
            }
        }

        playPauseButton.on('click', function(event) {
            event.preventDefault();

            if (slide.hasClass('playing')) {
                pause(slide, videos);
            } else if (slide.hasClass('paused')) {
                play(slide, videos);
            }
        });
    };



    // Poll for slider, then call the functions
    pollForElement('#'+sliderId, function() {
        initMutationObserver();
        toggleVideoPlayback();
    });

})();
