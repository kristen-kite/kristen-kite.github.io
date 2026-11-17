document.querySelectorAll(".carousel").forEach(function(c){var t=c.querySelector(".track");
c.querySelector(".prev").onclick=function(){t.scrollBy({left:-t.clientWidth})};
c.querySelector(".next").onclick=function(){t.scrollBy({left:t.clientWidth})};});
