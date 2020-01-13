(function() {
    var $chat = $('.mt_chat');

    if ($chat) {
        var $button = $('.mt_chat__button') || $('[name="mtChatButton"]');
        var $bubble = $('.mt_chat__bubble');
        var $close = $('.mt_chat__close') || $('[name="mtChatClose"]');

        $button.on('click', function() {
            $bubble.toggle();
        });

        $close.on('click', function() {
            $bubble.hide();
        });

        $chat.hover(
            function() {
                if ($(window).width() >= 1025) {
                    $bubble.show();
                }
            },
            function() {
                if ($(window).width() >= 1025) {
                    $bubble.hide();
                }
            }
        );
    };
})();
