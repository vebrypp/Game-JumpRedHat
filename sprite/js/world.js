import Land from './land.js'

export default class World {
    constructor(game) {
        this.game = game;
        this.land = new Land(game);
        this.lands = [];
        this.landScale = this.land.scaleWidth;
    };
    draw(c) {
        for(let i = this.lands.length; i < this.landScale + 1; i++) {
            this.lands.push(new Land(this.game, i * this.land.iWidth))
        };
        this.lands.forEach((e) => {
            e.draw(c);
        });
    };
    update() {
        this.lands.forEach((e) => {
            e.update();
        });
    };
};