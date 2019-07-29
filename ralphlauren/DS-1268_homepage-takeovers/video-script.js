(function() {
    // Load video script
    $.get('/on/demandware.static/-/Sites-RalphLauren_US-Library/en_US/v1563876661277/js/201907/07092019-m-purple-pre-fall-ii-lp/loopvideos.js?zzz=20190709a');

    var showHighlightsVid = '<div id="rlc-vidpopup">' + '<section class="rlc-block rlc-isvisible rlc-inview rlc-played paused">' + '<video width="100%" height="100%" controls preload="none" controlslist="nodownload" autoplay><source src="//video.ralphlauren.com/201907/RLMag_JoshuaEllis_Longform_1.mp4" type="video/mp4">Your browser does not support the video tag.</video>' + '<a href="javascript::" class="rlc-closebutton"></a>' + '</section>' + '</div>';
    jQuery("#rlc-fvtrigger").click(function() {
        jQuery('body').append(showHighlightsVid);
        var vidpopup = jQuery("#rlc-vidpopup");
        vidpopup.find("video").get(0).play();
        jQuery(vidpopup).find(".rlc-closebutton").click(function() {
            vidpopup.remove();
        });
        jQuery(vidpopup).click(function(e) {
            if (e.target !== this)
            return;
            vidpopup.remove();
        });
    });
})(jQuery);
