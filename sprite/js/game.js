import World from "./world.js";
import Controller from "./controller.js";
import Player from "./player.js";

export default class Game {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.state = 'start';
        this.world = new World(this);
        this.controller = new Controller();
        this.player = new Player(this);
    };
    draw(c) {
        this.world.draw(c);
        this.player.draw(c);
    };
    update(deltaTime) {       
        this.world.update(deltaTime); 
        this.player.update(deltaTime, this.controller.keys);
    };
    restart() {

    };
};