"use strict";

(function () {
  var loadMore = document.querySelector('#loadMore');

  if (loadMore) {
    // If aria-expanded = true
    var expanded = loadMore.getAttribute('aria-expanded');

    if (expanded == 'true') {
      // Set loadMore aria-expanded=false4
      loadMore.setAttribute('aria-expaned', 'false'); // Set filterMore aria-expanded=false4

      var filterMore = document.querySelector('#filterMore');
      filterMore.setAttribute('aria-expanded', 'false'); // Set all searchFilter2 li display:none4

      var searchFilters = document.querySelectorAll('#searchFilter2 > li');

      for (var i = 0; i < searchFilters.length; i++) {
        searchFilters[i].style.display = 'none';
      } // Rotate .storeLocator_caret transform: rotate(270deg)4


      var caret = filterMore.querySelector('.storeLocator_caret');
      caret.style.transform = 'rotate(270deg)';
    }
  }
})();

//# sourceMappingURL=script.compile.js.map
