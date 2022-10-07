import Land from "./land.js";
import Player from "./redhat.js";

export default class Game {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.state = 'start';
        this.land = new Land(this);
        this.player = new Player(this);
        this.fps = 30;
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
                this.player.update();
            } else {
                this.time += alphaTime;
            }
        };
    };
    restart() {

    };
};