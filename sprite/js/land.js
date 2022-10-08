export default class Land {
    constructor(game, x) {
        this.game = game;
        this.scaleWidth = 10;
        this.iWidth = this.game.w / this.scaleWidth;
        this.iHeight = this.iWidth;
        this.sizeX = this.game.w / 5;
        this.sizeY = this.iHeight;
        this.x = x;
        this.y = this.game.h - this.sizeY - 10;
        this.img = new Image;
        this.img.src = './sprite/img/tiles/landearth.png';
    };
    draw(c) {
        c.beginPath();
        c.drawImage(this.img, this.x, this.y, this.iWidth, this.iHeight);
        c.closePath();
    };
    update() {
        this.x--;
        if(this.x < -this.iWidth) this.x = this.game.w;
    };
};