
export default class Player {
    constructor(game) {
        this.game = game;
        this.img = new Image;
        this.state = 'idle';
        this.frame = 1;
        this.frameLimit = 8;
        this.img.src = `./sprite/img/redhat/${this.state} (${this.frame}).png`;
        this.size = this.game.w / 7;
        this.sw = 609;
        this.sh = 569;
        this.x = 0;
        this.y = this.game.h - this.game.land.sizeY - this.size + 16;
        this.color = 'white';
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeedX = 20;
        this.maxSpeedY = 50;
        this.gravity = 3;
    };
    draw(c) {
        c.beginPath();
        c.strokeStyle = this.color;
        c.rect(this.x, this.y, this.size, this.size);
        c.stroke();
        c.drawImage(this.img, 0, 0, this.sw, this.sh, this.x, this.y, this.size, this.size);
        c.closePath()
    };
    update(input) {
        this.x += this.speedX;
        this.y += this.speedY;
        if(input.includes('ArrowRight')) this.speedX = this.maxSpeedX;
        else if(input.includes('ArrowLeft')) this.speedX = -this.maxSpeedX;
        else this.speedX = 0;
        if(this.x < 0) this.x = 0;
        if(this.x + this.size > this.game.w) this.x = this.game.w - this.size;
        if(this.onGround() && input.includes('Space')) this.speedY = -this.maxSpeedY;
        if(!this.onGround()) {
            this.speedY += this.gravity;
        } else {
            this.y = this.game.h - this.game.land.sizeY - this.size + 16;
        };

        if(this.frame > this.frameLimit -1) {
            this.frame = 1;
        } else {
            this.frame++;
        };
        this.img.src = `./sprite/img/redhat/${this.state} (${this.frame}).png`;
    };
    onGround() {
         return this.y >= this.game.h - this.game.land.sizeY - this.size + 16;
    };
};