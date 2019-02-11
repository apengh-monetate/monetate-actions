"use strict";

(function () {
  console.error('Detect dataLayer.push event');
  var targetEvent = 'pdpSizeAjaxLoadComplete';
  window.addEventListener(targetEvent, function () {
    console.error('pdpSizeAjaxLoadComplete Fired!');
  });
})();

//# sourceMappingURL=script.compile.js.map
