!function(){var t=document.querySelector(".mt_cart-accordion");if(t){var e=t.querySelector(".mt_cart-accordion__heading"),a=t.querySelector(".mt_cart-accordion__panel");e.addEventListener("click",function(){a.classList.toggle("active"),a.style.maxHeight?a.style.maxHeight=null:a.style.maxHeight=a.scrollHeight+"px";var c=t.getAttribute("data-accordion-status");"closed"===c?(t.setAttribute("data-accordion-status","open"),e.setAttribute("aria-expanded","true")):"open"===c&&(t.setAttribute("data-accordion-status","closed"),e.setAttribute("aria-expanded","false"))})}}();