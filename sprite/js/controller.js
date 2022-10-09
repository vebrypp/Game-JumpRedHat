export default class Controller {
    constructor() {
        this.keys = [];
        window.addEventListener('keydown', (e) => {
            if((e.code === 'ArrowUp' ||
                e.code === 'ArrowDown' ||
                e.code === 'ArrowLeft' ||
                e.code === 'ArrowRight' ||
                e.code === 'Space' ||
                e.code === 'KeyE') &&
               this.keys.indexOf(e.code) === -1)
            this.keys.push(e.code);
        });
        window.addEventListener('keyup', (e) => {
            if((e.code === 'ArrowUp' ||
                e.code === 'ArrowDown' ||
                e.code === 'ArrowLeft' ||
                e.code === 'ArrowRight' ||
                e.code === 'Space' ||
                e.code === 'KeyE') &&
               this.keys.indexOf(e.code) > -1)
            this.keys.splice(this.keys.indexOf(e.code), 1);
        });
    };
};