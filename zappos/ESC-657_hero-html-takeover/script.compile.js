"use strict";

// ==================================================================
// API Event - Clicks on each CTA
// ==================================================================
(function () {
  var heroCTAs = document.querySelectorAll('.mt_hero__cta');

  if (heroCTAs.length) {
    for (var i = 0; i < heroCTAs.length; i++) {
      heroCTAs[i].addEventListener('click', function () {
        window.monetateQ = window.monetateQ || [];
        window.monetateQ.push(["trackEvent", ["MFEtagTest"]]);
      });
    }
  }
})();

//# sourceMappingURL=script.compile.js.map
