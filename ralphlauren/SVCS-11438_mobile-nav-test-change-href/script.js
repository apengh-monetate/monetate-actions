var level1 = $('#navigation li.nav-item');

$('#navigation li.nav-item').each(function(index) {
    console.group('LEVEL 1');
    var level1 = $(this).find('a[data-webcat]').attr('data-webcat');
    console.log(level1);
    console.groupEnd();
    $(this).find('.top-sub-cat')
});
