let milisec = 0;
let sec = 0;
let min = 0;
let temporizador;

function AtualizarDisplay() {
    const display = document.getElementById('temp');
    display.textContent = 
        `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}:${String(milisec).padStart(3, '0')}`;
}

function startTime() {
    if (!temporizador) {
        temporizador = setInterval(() => {
            milisec += 10;

            if (milisec >= 1000) {
                milisec = 0;
                sec++;
            }

            if (sec >= 60) {
                sec = 0;
                min++;
            }

            AtualizarDisplay();
        }, 10);

        AnimationColor('verde');
    }
}

function PauseTime() {
    clearInterval(temporizador);
    temporizador = null;

    AnimationColor('amarelo');
}

function ResetTime() {
    clearInterval(temporizador);
    temporizador = null;

    milisec = 0;
    sec = 0;
    min = 0;

    AtualizarDisplay();

    AnimationColor('vermelho');
}

/*------------------------------- Animation --------------------*/

function AnimationColor(cor) {
    const circulo = document.querySelector('.circulo');
    const animation = document.getElementById('animation');

    // Remove classes antigas
    circulo.classList.remove('circulo-verde', 'circulo-amarelo', 'circulo-vermelho');

    let realColor = '';

    if (cor === 'verde') {
        circulo.classList.add('circulo-verde');
        realColor = '#4CAF50';
    } else if (cor === 'amarelo') {
        circulo.classList.add('circulo-amarelo');
        realColor = '#FFB74D';
    } else if (cor === 'vermelho') {
        circulo.classList.add('circulo-vermelho');
        realColor = '#E57373';
    }

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const size = Math.sqrt(vw, vh) * 5 + 'px';

    animation.style.backgroundColor = realColor;
    animation.style.width = '0';
    animation.style.height = '0';

    animation.offsetWidth;

    setTimeout(() =>{
        animation.style.width = '200vw';
        animation.style.height = '200vw';
    }, 10)

}
