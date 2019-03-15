(function() {
    var collapsible = {
        init: function() {
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function() {
            this.$toggle = $('.mt-toggle__header');
            this.$content = $('.' + this.$toggle.attr('data-collapsible-target'));
            this.$close = $('.mt-toggle__close');
        },
        bindEvents: function() {
            this.$toggle.on('click', this.toggleCollapsible.bind(this));
            this.$close.on('click', this.closeCollapsible.bind(this));
        },
        toggleCollapsible: function() {
            if(this.$toggle.attr('data-collapsible-status') === 'closed') {
                this.openCollapsible();
            } else {
                this.closeCollapsible();
            }
        },
        openCollapsible: function() {
            this.$toggle.attr('data-collapsible-status', 'open');
            this.$content.slideDown();
            this.$content.attr('aria-expanded', true);
            this.$content.attr('aria-hidden', false);
        },
        closeCollapsible: function() {
            this.$content.attr('aria-hidden', true);
            this.$content.attr('aria-expanded', false);
            this.$content.slideUp();
            this.$toggle.attr('data-collapsible-status', 'closed');
        }
    };


    collapsible.init();
})();
