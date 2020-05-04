(function() {
    var chat = document.querySelector('.mt_chat');
    if (chat) {
        var bubble = chat.querySelector('.mt_chat__bubble');
        var primary = chat.querySelector('.mt_chat__bubble-primary');
        var secondary = chat.querySelector('.mt_chat__bubble-secondary');

        primary.addEventListener('click', function() {
            primary.style.display = 'none';
            secondary.style.display = 'block';

            bubble.classList.remove('mt-primary-message');
            bubble.classList.add('mt-secondary-message');
        });
    }
})();
