// constructor

function Ster(afbNaam, i) {
    this.x = 300 + 20*i;
    this.y = 300 = 10*i;
    this.afbNaam = 'afb/' + afbNaam;
    var nweAfb = document.createElement('img');
    nweAfb.src = this.afbNaam;
    nweAfb.className = 'volg';
    nweAfb.style.left = this.x + 'px';
    nweAfb.style.top = this.y + 'px';
    document.getElementById('volgers').appendChild(nweAfb);
}