!function(){var e=[".mt_hero .mt_hero__link",".mt_bucket .mt_bucket__link",".mt_slider .mt_slide__link"];window.onload=function(){var t=e.toString(),n=document.querySelectorAll(t);console.log(n);for(var o=0;o<n.length;o++){var i=n[o];i&&i.addEventListener("click",function(){window.monetateQ=window.monetateQ||[],window.monetateQ.push(["trackEvent",["RLHomepageTakeover"]])})}}}();