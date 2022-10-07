import { IdleLeft, IdleRight, RunRight, RunLeft } from "./playerstate.js";

export default class Player {
    constructor(game) {
        this.game = game;
        this.size = this.game.w / 7;
        this.sw = 609;
        this.sh = 569;
        this.x = 0;
        this.y = this.game.h - this.game.land.sizeY - this.size + 16;
        this.color = 'white';
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeedX = 10;
        this.maxSpeedY = 30;
        this.gravity = 1;
        this.fps = 60;
        this.timeout = 1000/this.fps;
        this.time = 0;
        
        this.state = '';
        this.frame = 1;
        this.frameLimit = 0;
        this.states = [new IdleRight(this), new IdleLeft(this), new RunRight(this), new RunLeft(this)];
        this.currentState = this.states[0];
        this.currentState.enter();
        this.img = new Image;
        this.img.src = `./sprite/img/redhat/${this.state}(${this.frame}).png`;
    };
    draw(c) {
        c.beginPath();
        c.strokeStyle = this.color;
        c.rect(this.x, this.y, this.size, this.size);
        c.stroke();
        c.drawImage(this.img, 0, 0, this.sw, this.sh, this.x, this.y, this.size, this.size);
        c.closePath()
    };
    update(deltaTime, input) {
        this.currentState.inputHandle(input);
        this.x += this.speedX;
        this.y += this.speedY;
        if(input.includes('ArrowRight')) this.speedX = this.maxSpeedX;
        else if(input.includes('ArrowLeft')) this.speedX = -this.maxSpeedX;
        else this.speedX = 0;
        if(this.x < 0) this.x = 0;
        if(this.x + this.size > this.game.w) this.x = this.game.w - this.size;
        if(this.onGround() && input.includes('Space')) this.speedY = -this.maxSpeedY;
        if(!this.onGround()) {
            this.speedY += this.gravity;
        } else {
            this.y = this.game.h - this.game.land.sizeY - this.size + 16;
        };

        if(this.time > this.timeout) {
            this.time = 0;
            if(this.frame > this.frameLimit - 1) {
                this.frame = 1;
            } else {
                this.frame++;
            };
            this.img.src = `./sprite/img/redhat/${this.state}(${this.frame}).png`;
        } else {
            this.time += deltaTime;
        };
    };
    onGround() {
         return this.y >= this.game.h - this.game.land.sizeY - this.size + 16;
    };
    changeState(state) {
        this.currentState = this.states[state];
        this.currentState.enter();
    }
};