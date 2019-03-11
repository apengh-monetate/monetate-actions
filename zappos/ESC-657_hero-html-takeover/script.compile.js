"use strict";

(function () {
  var heroCTA = document.querySelectorAll('.mt_hero__cta');

  if (heroCTA.length) {
    for (var i = 0; i < heroCTA.length; i++) {
      heroCTA[i].addEventListener('click', function () {
        window.monetateQ = window.monetateQ || [];
        window.monetateQ.push(["trackEvent", ["MFEtagTest"]]);
      });
    }
  }
})();

//# sourceMappingURL=script.compile.js.map
