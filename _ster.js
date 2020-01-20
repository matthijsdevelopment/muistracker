class Ster {
    __construct(afbNaam, i) {
        this.x = 300 + 20;
        this.y = 300 + 10;
        this.afbNaam = 'afb/' + afbNaam;
        var nweAfb = document.createElement('img');
        nweAfb.src = this.afbNaam;
        nweAfb.className = 'volg';
        nweAfb.style.left = this.x + 'px';
        nweAfb.style.top = this.y + 'px';
        nweAfb.style.webkitTransform = 'rotate('+7*i+'deg)';
        document.getElementById('volgers').appendChild(nweAfb);
        //de beweging
        this.vx = 0;
        this.vy = 0;
        this.draaiing = 7*i;
        
        this.bewegen = function (invX, invY) {
            this.vx += (invX-this.x)*this.veerconstante;
            this.vY += (invY-this.Y)*this.veerconstante;
            this.vx *= (invX-this.x)*this.veerconstante;
            this.vx *= this.demping;
            this.vY += this.demping;
            this.x += this.vx;
            this.y += this.vy;
            this.draaiing += this.vx;
            nweAfb.style.left = this.x - this.vedfschuiving + 'px';
            nweAfb.style.webkitTransform = 'rotate('+this.draaiing+'deg)';
        }
    
    Ster.prototype.verschuiving = 25;
    Ster.prototype.veerconstante = 0.1;
    Ster.prototype.demping = 0.8;
    }
}
