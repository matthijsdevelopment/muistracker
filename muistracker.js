var textstXp = document.getElementById('textX');
var textstYp = document.getElementById('textY');
var deAfbeeldingen = ["star.png", "ster.png", "sterr.png"];

var alleVolgers = [];
var muisX = 0;
var muisY = 0;

for(i=0; i<deAfbeeldingen.length; i++) {
    var naam = deAfbeeldingen[i];
    var ster = new Ster(naam, i);
    alleVolgers.push(ster);
}

(function doeDitSteeds () {
    window.onmousemove = geefMuisPositie;
    function geefMuisPositie(e) {
        textstXp.innerHTML = e.clientX;
        textstYp.innerHTML = e.clientY;
        muisX = e.clientX;
        muisY = e.clientY;
    }

    for(var i=0; i<alleVolgers.length; i++) {
        var volger = alleVolgers[i];
        var doelX = muisX;
        var doelY = muisY;
        if(i>0) {
            doelX = alleVolgers[i-1].x;
            doelY = alleVolgers[i-1].y;
        };
        volger.bewegen(doelX,doelY);
    }
    requestAnimationFrame(doeDitSteeds);
}());