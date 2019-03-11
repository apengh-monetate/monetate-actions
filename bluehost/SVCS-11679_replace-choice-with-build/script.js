(function() {
    var tooltip = $('span[data-tooltip-text]');

    tooltip.on('click', function() {
        // If doesn't exist, add
        if( $(this).find('div.tooltip').length === 0 ) {
            var message = $(this).attr('data-tooltip-text');
            var html = '<div class="tooltip"></div>';
            $(this).append(html);
            $(this).find('div.tooltip').html(message);
            $(this).find('div.tooltip').addClass('fade-in');
        // If does exist, remove
        } else {
            $(this).find('div.tooltip').remove();
        }
    });
})();
