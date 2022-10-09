let state = {
    idleRight: 0,
    idleLeft: 1,
    runRight: 2,
    runLeft: 3,
    jumpRight: 4,
    jumpLeft: 5,
    fallRight: 6,
    fallLeft: 7,
};

export class IdleRight {
    constructor(player) {
        this.player = player;
    };
    enter() {
        this.player.maxFrame = 9;
        this.player.state = 'idleright';
    };
    handleInput(input) {
        if(input.includes('ArrowRight')) this.player.stateChange(state.runRight);
        if(input.includes('ArrowLeft')) this.player.stateChange(state.runLeft);
        if(input.includes('ArrowUp')) this.player.stateChange(state.jumpRight);
    };
};
export class IdleLeft {
    constructor(player) {
        this.player = player;
    };
    enter() {
        this.player.maxFrame = 9;
        this.player.state = 'idleleft';
    };
    handleInput(input) {
        if(input.includes('ArrowRight')) this.player.stateChange(state.runRight);
        if(input.includes('ArrowLeft')) this.player.stateChange(state.runLeft);
        if(input.includes('ArrowUp')) this.player.stateChange(state.jumpLeft);
    };
};
export class RunRight {
    constructor(player) {
        this.player = player;
    };
    enter() {
        this.player.maxFrame = 9;
        this.player.state = 'runright';
    };
    handleInput(input) {
        if(input.length === 0) this.player.stateChange(state.idleRight);
        if(input[0] === 'ArrowLeft') this.player.stateChange(state.runLeft);
        if(input.includes('ArrowUp')) this.player.stateChange(state.jumpRight);
    };
};
export class RunLeft {
    constructor(player) {
        this.player = player;
    };
    enter() {
        this.player.maxFrame = 9;
        this.player.state = 'runleft';
    };
    handleInput(input) {
        if(input.length === 0) this.player.stateChange(state.idleLeft);
        if(input[0] === 'ArrowRight') this.player.stateChange(state.runRight);
        if(input.includes('ArrowUp')) this.player.stateChange(state.jumpLeft);
    };
};
export class JumpRight {
    constructor(player) {
        this.player = player;
    };
    enter() {
        this.player.state = 'jumpright';
        this.player.frame = 1;
        this.player.maxFrame = 3;
    };
    handleInput(input) {
        if(input.length === 0 && this.player.onGround()) this.player.stateChange(state.idleRight);
        if(input.includes('ArrowRight') && this.player.onGround()) this.player.stateChange(state.runRight);
        if(input.includes('ArrowLeft') && !input.includes('ArrowRight') && !this.player.onGround()) this.player.stateChange(state.jumpLeft);
    };
};
export class JumpLeft {
    constructor(player) {
        this.player = player;
    };
    enter() {
        this.player.state = 'JumpLeft';
        this.player.frame = 1;
        this.player.maxFrame = 3;
    };
    handleInput(input) {
        if(input.length === 0 && this.player.onGround()) this.player.stateChange(state.idleLeft);
        if(input.includes('ArrowLeft') && this.player.onGround()) this.player.stateChange(state.runLeft);
        if(input.includes('ArrowRight') && !input.includes('ArrowLeft') && !this.player.onGround()) this.player.stateChange(state.jumpRight);
    };
};