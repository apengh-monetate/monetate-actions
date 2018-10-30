window.onload = function() {
  var search = document.querySelector('.search.remove-on-mobile');
  if(!search.classList.contains('active')) {
    search.querySelector('#mega-search-trigger').click();
  }
}
