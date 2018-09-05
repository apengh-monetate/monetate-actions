var specialOffers = $('#navigation > nav > div.items-navigation > ul > li.baby-girl.topCat > div.subnav > div > div.column.promo');
var categories = $('#navigation > nav > div.items-navigation > ul > li.baby-girl.topCat > div.subnav > div > div.column.first > ul > li.menuTitle');

$('div.column.promo ul').css('column-count', 'auto');

categories.before(specialOffers);
