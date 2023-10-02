/* 
let canvasSize;
let elementSize;
const canvas = document.getElementById('game');
const game = canvas.getContext('2d');

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
    const map = maps[0];
    const rowMap = map.map(item => item.trim().split('\n')).map(item=> item.split('').trim());
   
    console.log('rowmap',rowMap);
    for (let row = 0; row <10; row++) {
        for (let col = 1; col <=11; col++) {
            game.fillText(emojis[rowMap[col-1][row],elementSize *row,elementSize*col);
            
        }        
    }
}



 */