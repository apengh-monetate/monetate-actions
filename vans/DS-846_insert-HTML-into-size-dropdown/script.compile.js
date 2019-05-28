"use strict";

(function () {
  var dropdownMessage = {
    config: {
      url: 'https://www.vans.com/',
      value: 'additionalSizes'
    },
    init: function init() {
      this.cacheDom();
      this.insertHTML();
      this.bindEvents();
    },
    cacheDom: function cacheDom() {
      this.$dropdown = $('#attr-size');
    },
    insertHTML: function insertHTML() {
      var html = '<option value="' + this.config.value + '">Sizes 14-18 available here.</option>';
      this.$dropdown.append(html);
    },
    bindEvents: function bindEvents() {
      var value = this.config.value;
      var url = this.config.url;
      this.$dropdown.on('change', function () {
        var currentValue = $(this).val();

        if (currentValue === value) {
          window.location = url;
        }
      });
    }
  };
  dropdownMessage.init();
})();

//# sourceMappingURL=script.compile.js.map
