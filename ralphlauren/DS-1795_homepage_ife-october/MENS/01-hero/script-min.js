!function(){var e,n=document.querySelector(".mt_hero.video"),t=n.querySelector(".mt_hero__video-btn"),i=n.querySelectorAll(".mt_hero__video video");function a(e,n){for(var t=0;t<n.length;t++){n[t].play(),e.classList.add("playing"),e.classList.remove("paused")}}t.addEventListener("click",function(e){e.preventDefault(),n.classList.contains("playing")?function(e,n){for(var t=0;t<n.length;t++)n[t].pause(),e.classList.add("paused"),e.classList.remove("playing")}(n,i):n.classList.contains("paused")&&a(n,i)}),((e=e||navigator.userAgent).indexOf("MSIE ")>-1||e.indexOf("Trident/")>-1||e.indexOf("Edge/")>-1)&&(window.onload=function(){a(n,i)})}();