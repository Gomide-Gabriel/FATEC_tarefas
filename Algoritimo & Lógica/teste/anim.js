let start = Date.now(); // tempo de começo

let timer = setInterval(function () {
    // quanto tempo passou desde o começo
    let timePassed = Date.now() - start;

    if (timePassed >= 2000){
        clearInterval(timer); // limpa o intervalo depois de 2 segundos
        return;
    }

    // desenha a animação
    Draw(timePassed);
}, 20);

// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function draw(timePassed) {
    train.style.left = timePassed / 5 + 'px';
}