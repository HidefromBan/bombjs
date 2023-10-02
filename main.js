const canvas = document.getElementById('game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up')
const btnDown = document.querySelector('#down')
const btnRight = document.querySelector('#right')
const btnLeft = document.querySelector('#left')

let canvasSize;
let elementSize;

const playerPosition = {
    x: undefined,
    y: undefined,
}


window.addEventListener('load',setCanvasSize);
window.addEventListener('resize',setCanvasSize);


function setCanvasSize(){
    // Llenado del mapa , junto con las dimensiones del canvas.
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * .7;
    }else{
        canvasSize = window.innerHeight *.7;
    }
    
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height',canvasSize);
    
    elementSize = (canvasSize/10)- 1 ;
    
    startGame();
}

function startGame(){
    
    game.font = elementSize + 'px Verdana';
    game.textAlign = '';

    const map = maps[0]; // asigno primer mapa a una variable
    const mapRows = map.trim().split('\n');
    const mapRowsCol = mapRows.map(item => item.trim().split(''));

    game.clearRect(0,0,canvasSize,canvasSize);
    mapRowsCol.forEach((row,rowI) => {
        row.forEach((col,colI)=>{
            const emoji = emojis[col];
            const posX = elementSize * (colI );
            const posY = elementSize * (rowI + .9);
            if(col == 'O'){
               if(!playerPosition.x && !playerPosition.y){
                playerPosition.x = posX;
                playerPosition.y = posY;
                console.log({playerPosition});
               }
            }
            game.fillText(emoji,posX,posY)
        })
    });
    movePlayer();
}

function movePlayer(){
    game.fillText(emojis['PLAYER'],playerPosition.x,playerPosition.y);
}

window.addEventListener('keydown',moveKeys);
btnUp.addEventListener("click",moveUp);
btnDown.addEventListener("click",moveDown);
btnLeft.addEventListener("click",moveLeft);
btnRight.addEventListener("click",moveRight);

function moveKeys(e){
    switch(e.key){
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
        default: console.log(`nose que tecla has pulsado bueno si fue "${e.key}" `)
    }
}

function moveUp(){
    console.log('MoveUp');
    playerPosition.y -= elementSize;
    startGame();
}
function moveDown(){
    console.log('MoveDown');
    playerPosition.y += elementSize;
    startGame();
}
function moveLeft(){
    console.log('MoveLeft');
    playerPosition.x -= elementSize;
    startGame();}
function moveRight(){
    console.log('MoveRight');
    playerPosition.x += elementSize;
    startGame();}




