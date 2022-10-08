import Game from './sprite/js/game.js';

window.addEventListener('load', function() {
    let w, h, game, time;
    const myCanvas = document.querySelector('#myCanvas');
    const c = myCanvas.getContext('2d');

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    init();
    

    function init() {
        game = new Game(w, h);
        time = 0;
        // const start = window.confirm('Apakah anda ingin memulai permainan?');
        // if(start) animationLoop();
        animationLoop(0)
    };
    function resizeCanvas() {
        let fixedW = Math.floor(window.innerWidth * 9 / 10);
        let fixedH = Math.floor(window.innerHeight * 9 / 10);
        w = myCanvas.width = fixedW;
        h = myCanvas.height = fixedH;
    };
    function animationLoop(timeStamp) {
        let deltaTime = timeStamp - time;
        time = timeStamp;

        c.clearRect(0, 0, w, h);
        game.draw(c);
        game.update(deltaTime);
        requestAnimationFrame(animationLoop);
    };
});