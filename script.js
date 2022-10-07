window.addEventListener('load', function() {
    let w, h;
    const myCanvas = document.querySelector('#myCanvas');
    const c = myCanvas.getContext('2d');

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    init();
    

    function init() {
        const start = window.confirm('Apakah anda ingin memulai permainan?');
        if(start) animationLoop();
    };
    function resizeCanvas() {
        w = myCanvas.width = window.innerWidth;
        h = myCanvas.height = window.innerHeight;
    };
    function animationLoop() {
        c.clearRect(0, 0, w, h);
        requestAnimationFrame(animationLoop);
    };
});