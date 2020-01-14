var textstXp = document.getElementById('textX');
var textstYp = document.getElementById('textY');

(function doeDitSteeds () {
    window.onmousemove = geefMuisPositie;
    function geefMuisPositie(e) {
        textstXp.innerHTML = e.clientX;
        textstYp.innerHTML = e.clientY;
    }
    requestAnimationFrame(doeDitSteeds);
}());