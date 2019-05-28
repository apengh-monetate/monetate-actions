var pageId = document.querySelectorAll('[data-page-id]')[0];
pageId = pageId.getAttribute('data-page-id');

if (pageId) {
    var eventLabel = document.querySelectorAll('[data-page-id="'+pageId+'"] > a[data-eventlabel][data-eventvalue]');
    for(var i = 0; i < eventLabel.length; i++) {
        eventLabel[i].addEventListener('click', function(event) {
            event.preventDefault(); // REMOVE!!!

            var label = this.getAttribute('data-eventlabel');
            var value = this.getAttribute('data-eventvalue');
            var monetateEvent = pageId + '__' + label + '__' + value;
            console.log(monetateEvent);
        });
    }
}
