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
        canvasSize = Math.floor( window.innerWidth * .7);
    }else{
        canvasSize = Math.floor(window.innerHeight *.7);
    }
    
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height',canvasSize);
    
    elementSize = Math.floor((canvasSize/10)- 1 );
    
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
            const posX = Math.floor(elementSize * (colI ));
            const posY = Math.floor(elementSize * (rowI + .9));
            if(col == 'O'){
               if(!playerPosition.x && !playerPosition.y){
                playerPosition.x = Math.floor(posX);
                playerPosition.y = Math.floor(posY);
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



/* Player moves with border restriction */
function moveUp(){
    console.log(playerPosition.y);
   playerPosition.y -= elementSize; // para subir le resto al canvas.
   if(playerPosition.y <= 0){ // si la posicion es menor a cero
    console.log('out top')
    playerPosition.y +=elementSize;
   }
   startGame();
}
function moveLeft(){
    console.log('Move left');
    playerPosition.x -= elementSize;
    if(playerPosition.x < 0){
        console.log('out left');
        playerPosition.x += elementSize
    }

    startGame();}

    
function moveDown(){
    console.log('MoveDown');
    playerPosition.y += elementSize;
    if(playerPosition.y >= canvasSize){
        console.log('out down');
        playerPosition.y -= elementSize;
    }
    startGame();
}
    
    
function moveRight(){
    console.log('move right');
    playerPosition.x += elementSize;
    if(playerPosition.x > elementSize*9){
        console.log('Out Right')
        playerPosition.x -= elementSize;
    }
    startGame();
}




