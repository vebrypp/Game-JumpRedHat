import { IdleLeft, IdleRight, JumpLeft, JumpRight, RunLeft, RunRight } from "./playerstate.js";

export default class Player {
    constructor(game) {
        this.game = game
        this.speedX = 0;
        this.speedY = 0;
        this.time = 0;
        this.timeOut = 1000 / this.game.fps;
        this.stateList = [
            new IdleRight(this), 
            new IdleLeft(this), 
            new RunRight(this),
            new RunLeft(this),
            new JumpRight(this),
            new JumpLeft(this)
        ];
        this.currentState = this.stateList[0];
        this.state = 0;
        
        this.frame = 0;
        this.maxFrame = 9;
        this.img = new Image;
        this.img.src = `./sprite/img/player/${this.state}${this.frame}.png`;
        this.sx = 0;
        this.sy = 0;
        this.sw = 536;
        this.sh = 522;
        this.sizeX = this.game.w / this.game.scale;
        this.sizeY = this.sizeX;
        this.x = 0;
        this.y = this.game.h - this.sizeY - this.game.world.land.height + (this.game.h / 25);
        this.currentState.enter();

        this.strokeColor = 'white';

    };
    draw(c) {
        c.beginPath();
        c.strokeStyle = this.strokeColor;
        c.rect(this.x, this.y, this.sizeX, this.sizeY)
        c.drawImage(this.img, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.sizeX, this.sizeY);
        c.stroke();
        c.closePath();
    };
    update(input, deltatime) {
        if(this.time > this.timeOut) {
            this.time = 0;
            if(this.frame >= this.maxFrame) this.frame = 0;
            else this.frame++;
        } else {
            this.time += deltatime;
        };
        
        this.currentState.handleInput(input);
        this.x += this.speedX;
        if(input.includes('ArrowLeft') && !(input.includes('ArrowRight'))) this.speedX = -this.game.speedX;
        if(input.includes('ArrowRight') && !(input.includes('ArrowLeft'))) this.speedX = this.game.speedX;
        if(input.length === 0) this.speedX = 0;
        if(this.x < 0) this.x = 0;
        if(this.x > this.game.w - this.sizeX) this.x = this.game.w - this.sizeX;

        if(input.includes('ArrowUp') && this.onGround()) this.speedY = -this.game.speedY;
        this.y += this.speedY;
        if(!this.onGround()) {
            this.speedY += this.game.gravity;
            if(this.frame === 0) this.frame = this.maxFrame;
        } else this.y = this.game.h - this.sizeY - this.game.world.land.height + (this.game.h / 25), this.speedY = 0;

        this.img.src = `./sprite/img/player/${this.state}${this.frame}.png`;
    };
    onGround() {
        return this.y >= this.game.h - this.sizeY - this.game.world.land.height + (this.game.h / 25);
    };
    stateChange(state) {
        this.currentState = this.stateList[state];
        this.currentState.enter();
    }
};