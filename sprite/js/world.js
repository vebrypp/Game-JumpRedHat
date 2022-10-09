import { Land } from "./land.js"

export default class World {
    constructor(game) {
        this.game = game
        this.land = new Land(game);
    };
    draw(c) {
        this.land.draw(c);
    };
    update() {
        this.land.update();
    };
};