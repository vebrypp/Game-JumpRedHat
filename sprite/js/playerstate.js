let state = {
    idleRight: 0,
    idleLeft: 1,
    runRight: 2,
    runLeft: 3,
    jumpRight: 4,
    jumpLeft: 5
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
    };
};
export class IdleLeft extends State {
    constructor(player) {
        super();
        this.player = player;
    };
    enter() {

    };
    inputHandle(input) {
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
        if(input.includes('ArrowLeft')) this.player.changeState(state.runLeft);
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
        if(input.includes('ArrowRight')) this.player.changeState(state.runRight);
    };
};