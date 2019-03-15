"use strict";

(function () {
  var collapsible = {
    init: function init() {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function cacheDom() {
      this.$toggle = $('.mt-toggle__header');
      this.$content = $('.' + this.$toggle.attr('data-collapsible-target'));
      this.$close = $('.mt-toggle__close');
    },
    bindEvents: function bindEvents() {
      this.$toggle.on('click', this.toggleCollapsible.bind(this));
      this.$close.on('click', this.closeCollapsible.bind(this));
    },
    toggleCollapsible: function toggleCollapsible() {
      if (this.$toggle.attr('data-collapsible-status') === 'closed') {
        this.openCollapsible();
      } else {
        this.closeCollapsible();
      }
    },
    openCollapsible: function openCollapsible() {
      this.$toggle.attr('data-collapsible-status', 'open');
      this.$content.slideDown();
      this.$content.attr('aria-expanded', true);
      this.$content.attr('aria-hidden', false);
    },
    closeCollapsible: function closeCollapsible() {
      this.$content.attr('aria-hidden', true);
      this.$content.attr('aria-expanded', false);
      this.$content.slideUp();
      this.$toggle.attr('data-collapsible-status', 'closed');
    }
  };
  collapsible.init();
})();

//# sourceMappingURL=script.compile.js.map
