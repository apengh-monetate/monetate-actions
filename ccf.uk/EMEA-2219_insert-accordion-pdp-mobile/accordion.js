(function() {
  var collapsible = document.querySelector('#mtClonedTab');
  collapsible.onclick = function() {
    this.classList.toggle('ui-collapsible-collapsed');

    var heading = this.querySelector('.ui-collapsible-heading');
    heading.classList.toggle('ui-collapsible-heading-collapsed');
    heading.classList.toggle('ui-collapsible-heading-collapsed');

    var icon = heading.querySelector('.ui-collapsible-heading-toggle');
    icon.classList.toggle('ui-icon-minus');
    icon.classList.toggle('ui-icon-plus');

    var content = this.querySelector('.ui-collapsible-content');
    content.classList.toggle('ui-collapsible-content-collapsed');
  }
})();
