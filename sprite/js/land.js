export class Land {
    constructor(game, x) {
        this.game = game;
        this.width = this.game.w / this.game.scaleWorld;
        this.height = this.width;
        this.x = 0;
        this.y = this.game.h - this.height;
        this.sx = 0;
        this.sy = 0;
        this.sw = 128;
        this.sh = 128;
        this.img = new Image;
        this.img.src = './sprite/img/land/landearth.png';
        this.marked = false;
    };
    draw(c) {
        for(let i = 0; i < this.game.scaleWorld * 2; i++) {
            c.beginPath();
            c.drawImage(this.img, this.sx, this.sy, this.sw, this.sh, this.x + i * this.width, this.y, this.width, this.height);
            c.closePath();
        };
    };
    update() {
        this.x -= this.game.speedWorld;
        if(this.x < -this.width) this.x = 0
    };
};