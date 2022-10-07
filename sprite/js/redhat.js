export default class Player {
    constructor(game) {
        this.game = game;
        this.img = new Image;
        this.state = 'idle';
        this.frameLimit = 10;
        this.frame = 1;
        this.img.src = `./sprite/img/redhat/${this.state} (${this.frame}).png`;
        this.size = this.game.w / 7;
        this.sx = 0;
        this.sy = 0;
        this.sw = 609;
        this.sh = 569;
        this.x = 0;
        this.y = this.game.h - this.game.land.sizeY - this.size + 16;
        this.color = 'white';
    };
    draw(c) {
        c.beginPath();
        c.strokeStyle = this.color;
        c.rect(this.x, this.y, this.size, this.size);
        c.stroke();
        c.drawImage(this.img, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.size, this.size);
        c.closePath()
    };
    update() {
        if(this.frame === this.frameLimit) {
            this.frame = 1;
        } else {
            this.frame++;
        };
        this.img.src = `./sprite/img/redhat/${this.state} (${this.frame}).png`;
    };
};