"use strict";

// Advance on Next Click
(function wireGuideAdvanceButton(step) {
  step && step.attachEvent(pendo.dom('[data-guide-action="next"]'), 'click', function (e) {
    console.log('ADVANCED BUTTON CLICKED');
    pendo.onGuideAdvanced();
  });
})(step, guide); // Dismiss Guide


(function wireGuideDismissButton(step) {
  step && step.attachEvent(pendo.dom('[data-guide-action="dismiss"]'), 'click', function (e) {
    console.log('DISMISS BUTTON CLICKED');
    pendo.onGuideDismissed();
  });
})(step, guide);

//# sourceMappingURL=wire-advance-button.compile.js.map
