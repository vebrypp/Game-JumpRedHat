export default class Controller {
    constructor() {
        this.keys = [];
        window.addEventListener('keydown', (e) => {
            if((e.code === 'Space' ||
                e.code === 'ArrowLeft' ||
                e.code === 'ArrowRight') &&
               this.keys.indexOf(e.code) === -1)
            this.keys.push(e.code);
        });
        window.addEventListener('keyup', (e) => {
            if((e.code === 'Space' ||
                e.code === 'ArrowLeft' ||
                e.code === 'ArrowRight') &&
               this.keys.indexOf(e.code) > -1)
            this.keys.splice(this.keys.indexOf(e.code), 1);
        });
    };
};