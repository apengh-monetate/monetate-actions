(function() {
    var $accordions = $('.mt_accordion');

    $accordions.each(function(index) {
        var $accordion = $(this);
        var $trigger = $(this).find('[data-trigger-status]');
        var $panel = $(this).find('[data-panel-status]');
        console.log(index+1, $accordion, $trigger, $panel);

        $trigger.on('click', function() {
            var status = $accordion.attr('data-accordion-status');

            if (status === 'closed') {
                $accordion.attr('data-accordion-status', 'open'); // Set the accordion to open
                $trigger.attr('data-trigger-status', 'open'); // Set the trigger to open
                $panel.attr('data-panel-status', 'open'); // Set the panel to open

            } else if (status === 'open') {
                $accordion.attr('data-accordion-status', 'closed'); // Set the accordion to closed
                $trigger.attr('data-trigger-status', 'closed'); // Set the trigger to closed
                $panel.attr('data-panel-status', 'closed'); // Set the panel to closed
            }
        });
    });

})();
