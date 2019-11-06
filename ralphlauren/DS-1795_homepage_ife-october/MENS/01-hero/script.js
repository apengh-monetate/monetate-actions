(function() {
    var videoHero = document.querySelector('.mt_hero.video'),
        playPauseBtn = videoHero.querySelector('.mt_hero__video-btn'),
        videos = videoHero.querySelectorAll('.mt_hero__video video');

    function pause(hero, videos) {
        for (var i = 0; i < videos.length; i++) {
            var video = videos[i];
            video.pause();
            hero.classList.add('paused');
            hero.classList.remove('playing');
        }
    }

    function play(hero, videos) {
        for (var i = 0; i < videos.length; i++) {
            var video = videos[i];
            video.play();
            hero.classList.add('playing');
            hero.classList.remove('paused');
        }
    }

    function isIE(userAgent) {
        userAgent = userAgent || navigator.userAgent;
        return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
    }

    playPauseBtn.addEventListener('click', function(event) {
        event.preventDefault();

        if (videoHero.classList.contains('playing')) {
            pause(videoHero, videos);
        } else if (videoHero.classList.contains('paused')) {
            play(videoHero, videos);
        }
    });

    // For IE, manually start video on page load
    if (isIE()) {
        window.onload = function() {
            play(videoHero, videos);
        };
    }

})();
