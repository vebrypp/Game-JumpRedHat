export default class Land {
    constructor(game) {
        this.game = game;
        this.sizeX = this.game.w;
        this.sizeY = 16;
        this.x = 0;
        this.y = this.game.h - this.sizeY;
        this.color = 'brown';
    }
    draw(c) {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.sizeX, this.sizeY);
        c.closePath();
    };
}