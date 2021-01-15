const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let position = 0;

const handleKeyup = (event) => {
    if(event.keyCode === 32) {
        if(!isJumping) {
            jump();
        }
    }
}

const jump = () => {

    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 150) {
            clearInterval(upInterval);
            //descendo
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else{
                    position -= 20;
                    dino.style.bottom = `${position}px`
                }
            }, 20);
        } else{
            //subindo
        position += 20;
        dino.style.bottom = `${position}px`
        }
    }, 20);
}

const createCactus = () => {
    const cactus = document.createElement('div');
    let cactusPosition = 700;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = `${cactusPosition}px`;
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        //local ideal para almentar velucidade e dificultar o game
        cactusPosition -= 10;
        cactus.style.left = `${cactusPosition}px`;

        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60) {
           
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Game-Over</h1>'

        } else {
            
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keydown', handleKeyup);

/* 

    # A variável isJunping corrige um bug de pulo, 
      quando o space é precionado muito rápido.

    

*/