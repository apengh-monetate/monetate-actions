var sizes = [];
function sortNumber(a,b) {
    return a - b;
}

$('.detail__size-item').each(function() {
    // Get size
    var size = $(this).find('input.detail__size-swatch-item-input').attr('swatch-value');
    size = parseInt(size);
    sizes.push(size);
});

sizes.sort(sortNumber);
sizes.forEach(function(size) {
    var swatch = $('.detail__size-item').has('input[swatch-value='+size+']');
    $('.detail__size-item').last().after(swatch);
});
