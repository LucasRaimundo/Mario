const mario  = document.querySelector('.mario')
const pipe  = document.querySelector('.pipe')
let counter = 0;


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
       
    },500)

    
    
}

function increase() {
    setTimeout(() =>{
        counter ++
    span.textContent = counter
    },100)
    
}

const loop = setInterval(() => {
    const pipePositon = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    increase();

    if (pipePositon <= 120 && pipePositon > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePositon}px`;
    
    

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        
        

        mario.src='./assets/img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft ='50px'

        clearInterval(loop);
    }
}, 50)


document.addEventListener('keydown', jump);