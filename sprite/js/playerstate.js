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

class State {
    constructor() {

    };
};

export class IdleRight extends State {
    constructor(player) {
        super();
        this.player = player;
    };
    enter() {
        this.player.state = 'Idle Right';
        this.player.frameLimit = 10;
    };
    inputHandle(input) {
        if(input.includes('ArrowRight')) this.player.changeState(state.runRight);
        if(input.includes('ArrowLeft')) this.player.changeState(state.runLeft);
        if(input.includes('Space')) this.player.changeState(state.jumpRight);
    };
};
export class IdleLeft extends State {
    constructor(player) {
        super();
        this.player = player;
    };
    enter() {
        this.player.state = 'Idle Left';
        this.player.frameLimit = 10;
    };
    inputHandle(input) {
        if(input.includes('ArrowRight')) this.player.changeState(state.runRight);
        if(input.includes('ArrowLeft')) this.player.changeState(state.runLeft);
        if(input.includes('Space')) this.player.changeState(state.jumpLeft);
    };
};
export class RunRight extends State {
    constructor(player) {
        super();
        this.player = player;
    };
    enter() {
        this.player.state = 'Run Right';
        this.player.frameLimit = 8;
    };
    inputHandle(input) {
        if(input.length === 0) this.player.changeState(state.idleRight);
        if(input.includes('ArrowLeft') && !input.includes('ArrowRight')) this.player.changeState(state.runLeft);
        if(input.includes('Space')) this.player.changeState(state.jumpRight);
    };
};
export class RunLeft extends State {
    constructor(player) {
        super();
        this.player = player;
    };
    enter() {
        this.player.state = 'Run Left';
        this.player.frameLimit = 8;
    };
    inputHandle(input) {
        if(input.length === 0) this.player.changeState(state.idleLeft);
        if(input.includes('ArrowRight') && !input.includes('ArrowLeft')) this.player.changeState(state.runRight);
        if(input.includes('Space')) this.player.changeState(state.jumpLeft);
    };
};
export class JumpRight extends State {
    constructor(player) {
        super();
        this.player = player;
    };
    enter() {
        this.player.state = 'Jump Right';
        this.player.frameLimit = 9;
    };
    inputHandle(input) {
        if(input[0] === 'ArrowLeft') this.player.changeState(state.jumpLeft);
    };
};
export class JumpLeft extends State {
    constructor(player) {
        super();
        this.player = player;
    };
    enter() {
        this.player.state = 'Jump Left';
        this.player.frameLimit = 9;
    };
    inputHandle(input) {
        if(input[0] === 'ArrowRight') this.player.changeState(state.jumpRight);
    };
};
export class FallRight extends State {
    constructor(player) {
        super();
        this.player = player;
    };
    enter() {
        this.player.state = 'Fall Right';
        this.player.frameLimit = 1;
    };
    inputHandle(input) {
        if(input.length === 0 && this.player.onGround()) this.player.changeState(state.idleRight);
        if(input.includes('ArrowRight') && this.player.onGround()) this.player.changeState(state.runRight);
        if(input[0] === 'ArrowLeft' && !this.player.onGround()) this.player.changeState(state.fallLeft);
    };
};
export class FallLeft extends State {
    constructor(player) {
        super();
        this.player = player;
    };
    enter() {
        this.player.state = 'Fall Left';
        this.player.frameLimit = 1;
    };
    inputHandle(input) {
        if(input.length === 0 && this.player.onGround()) this.player.changeState(state.idleLeft);
        if(input.includes('ArrowLeft') && this.player.onGround()) this.player.changeState(state.runLeft);
        if(input[0] === 'ArrowRight' && !this.player.onGround()) this.player.changeState(state.fallRight);
    };
};