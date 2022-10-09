import Controller from "./controller.js";
import World from "./world.js";
import Player from "./player.js";

export default class Game {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.fps = 30;
        this.scale = 10;
        this.scaleWorld = 10;
        this.speedXModifier = 100;
        this.speedYModifier = 18;
        this.speedX = w / this.speedXModifier;
        this.speedY = h / this.speedYModifier;
        this.gravity = h / 375;
        this.speedWorld = 3;
        this.state = 'start';
        this.controller = new Controller;
        this.world = new World(this);
        this.player = new Player(this);
    };
    draw(c) {
        this.world.draw(c);
        this.player.draw(c);
    };
    update(deltaTime) {
        this.world.update();
        this.player.update(this.controller.keys, deltaTime)
    };
    restart() {

    };
};