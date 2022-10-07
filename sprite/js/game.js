import Land from "./land.js";
import Controller from "./controller.js";
import Player from "./player.js";

export default class Game {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.state = 'start';
        this.land = new Land(this);
        this.controller = new Controller();
        this.player = new Player(this);
        this.fps = 180;
        this.timeLimit = 1000/this.fps;
        this.time = 0;
    };
    draw(c) {
        this.land.draw(c);
        this.player.draw(c);
    };
    update(alphaTime) {
        if(this.state === 'start') {
            if(this.time > this.timeLimit) {
                this.time = 0;
                this.player.update(this.controller.keys);
            } else {
                this.time += alphaTime;
            };
        };
    };
    restart() {

    };
};