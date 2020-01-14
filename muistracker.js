var textstXp = document.getElementById('textX');
var textstYp = document.getElementById('textY');
var deAfbeelding = ["star.png", "ster.png", "sterr.png"];


for(i=0; i<deAfbeelding.length; i++) {
    var naam = deAfbeelding[i];
    var ster = new Ster(naam, i);
}

(function doeDitSteeds () {
    window.onmousemove = geefMuisPositie;
    function geefMuisPositie(e) {
        textstXp.innerHTML = e.clientX;
        textstYp.innerHTML = e.clientY;
    }
    requestAnimationFrame(doeDitSteeds);
}());