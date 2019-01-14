"use strict";

(function () {
  // Statuses to check for
  var statuses = ["Delivered", "Order placed", "Picked up", "Processing", "Ready for pick up", "Shipped", "Your prescription is being prepared"]; // Check if an element exists

  function elementExists(selector) {
    if (document.querySelectorAll(selector).length) {
      return true;
    }
  } // Poll/wait for an element to exist


  function pollForElement(selector, callback) {
    if (elementExists(selector)) {
      callback();
    } else {
      setTimeout(function () {
        pollForElement(selector, callback);
      }, 100);
    }
  } // HTML to be inserted - 'Orders in Progress' section


  function insertHTML(selector, method) {
    var html = "<div class=\"mt-oip prescription-list\" data-collapsible-status=\"closed\">\n      <h2 tabindex=\"0\" role=\"button\" class=\"mt-oip__heading prescription_header prescription_header_inactive heading--tertiary\" data-collapsible-target=\"mt-oip__content\">\n        <span class=\"glyphicon glyphicon-triangle-right\">&nbsp;</span> <span id=\"ordersInProgressCount\"></span> prescription(s) in progress\n      </h2>\n      <ul class=\"mt-oip__content prescription\" aria-hidden=\"true\" data-collapsible-status=\"closed\">\n        <!-- Orders in progress go here -->\n      </ul>\n    </div>";
    var relativeElement = document.querySelectorAll(selector);
    relativeElement = relativeElement[relativeElement.length - 1];
    relativeElement.insertAdjacentHTML(method, html);
  } // Move 'Orders in Progress' to collapsible element


  function moveOrdersInProgress() {
    var $content = document.querySelector('.mt-oip__content'); // Loop through active prescriptions

    var $activePrescriptions = document.querySelectorAll('.prescription-list-container > .prescription-list')[0];
    var $activePrescriptionsList = $activePrescriptions.querySelectorAll('ul.prescription > li.ng-scope');

    for (var i = 0; i < $activePrescriptionsList.length; i++) {
      var elementToCheck = $activePrescriptionsList[i].querySelector('a.text-btn.prescription_item_alternate-status, p.prescription_item_refill-text');

      if (elementToCheck !== null) {
        var elementText = elementToCheck.innerText.replace(/[^a-zA-Z\s]/g, '');
      } // Move to Orders in Progress (append to list)


      if (statuses.indexOf(elementText) !== -1) {
        $content.appendChild($activePrescriptionsList[i]);
      }
    } // Update 'Active Prescriptions' and 'Orders in Progress' Count


    var activePrescriptionsCount = $activePrescriptions.querySelectorAll('ul.prescription > li.ng-scope').length;
    var $activePrescriptionsSpan = $activePrescriptions.querySelector('h1.prescription_header > span');
    $activePrescriptionsSpan.innerText = activePrescriptionsCount;
    var ordersInProgressCount = document.querySelectorAll('.mt-oip__content > li.ng-scope').length;
    var $ordersInProgressCountSpan = document.querySelector('#ordersInProgressCount');
    $ordersInProgressCountSpan.innerText = ordersInProgressCount;
  } // Init collapsible


  function initCollapsible() {
    var $collapsible = document.querySelector('.mt-oip');
    var $trigger = $collapsible.querySelector('.mt-oip__heading');
    var $icon = $trigger.querySelector('span.glyphicon');
    var $content = $collapsible.querySelector('.mt-oip__content');
    var collapsedClass = 'glyphicon-triangle-right';
    var expandedClass = 'glyphicon-triangle-bottom';

    function openCollapsible() {
      $content.setAttribute('data-collapsible-status', 'open');
      $icon.classList.remove(collapsedClass);
      $icon.classList.add(expandedClass);
      $collapsible.setAttribute('data-collapsible-status', 'open');
      $content.setAttribute('aria-hidden', false);
    }

    function closeCollapsible() {
      $content.setAttribute('data-collapsible-status', 'closed');
      $icon.classList.remove(expandedClass);
      $icon.classList.add(collapsedClass);
      $collapsible.setAttribute('data-collapsible-status', 'closed');
      $content.setAttribute('aria-hidden', true);
    }

    function toggleCollapsible() {
      if ($content.getAttribute('data-collapsible-status') === 'closed') {
        openCollapsible();
      } else if ($content.getAttribute('data-collapsible-status') === 'open') {
        closeCollapsible();
      }
    }

    $trigger.addEventListener('click', function () {
      toggleCollapsible();
    });
  }

  var selector = '.prescription-list-container > .prescription-list:first-child';
  pollForElement(selector, function () {
    if (!elementExists('.mt-oip')) {
      insertHTML(selector, 'afterend');
      initCollapsible();
      setTimeout(function () {
        moveOrdersInProgress();
        var moveInterval = setInterval(function () {
          moveOrdersInProgress();
        }, 100);
        setTimeout(function () {
          clearInterval(moveInterval);
        }, 10000);
      }, 500);
    }
  });
})();

//# sourceMappingURL=orders-in-progress.compile.js.map
