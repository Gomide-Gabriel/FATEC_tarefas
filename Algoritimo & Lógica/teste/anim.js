  
 /* 
  animation.onclick = function() {
                let start = Date.now(); // tempo de começo

                let timer = setInterval(function () {
                    // quanto tempo passou desde o começo
                    let timePassed = Date.now() - start;

                    if (timePassed >= 2000){
                        clearInterval(timer); // limpa o intervalo depois de 2 segundos
                        return;
                    }

                    // desenha a animação
                    draw(timePassed);
                }, 20);

                // as timePassed goes from 0 to 2000
                // left gets values from 0px to 400px
                function draw(timePassed) {
                    animation.style.left = timePassed / 5 + 'px';
                }
            }



            animation.animate([
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(100px)' }
                ], {
                    duration: 1000, // 1 second
                    iterations: 1, // loop indefinitely
                    easing: 'ease-in-out'
                });

*/