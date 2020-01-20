const textstXp = document.getElementById('textX');
const textstYp = document.getElementById('textY');
const deAfbeeldingen = ['star.png', 'ster.png', 'sterr.png'];

const alleVolgers = [];
let muisX = 0;
let muisY = 0;

for (i = 0; i < deAfbeeldingen.length; i++) {
  const naam = deAfbeeldingen[i];
  const ster = new Ster(naam, i);
  alleVolgers.push(ster);
}

(function doeDitSteeds() {
  window.onmousemove = geefMuisPositie;
  function geefMuisPositie(e) {
    textstXp.innerHTML = e.clientX;
    textstYp.innerHTML = e.clientY;
    muisX = e.clientX;
    muisY = e.clientY;
  }

  for (let i = 0; i < alleVolgers.length; i++) {
    const volger = alleVolgers[i];
    let doelX = muisX;
    let doelY = muisY;
    if (i > 0) {
      doelX = alleVolgers[i - 1].x;
      doelY = alleVolgers[i - 1].y;
    }
    volger.bewegen(doelX, doelY);
  }
  requestAnimationFrame(doeDitSteeds);
}());