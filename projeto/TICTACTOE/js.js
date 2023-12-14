const cell = document.querySelectorAll('.cell')
const stats = document.querySelector('#statusText')
const btn = document.querySelector('#restartBtn')

const wincondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let option = ['' , '' , '' , '' , '' , '' , '' , '' ,'']
let curentPlayer = 'X';
let running = false

initialize()

function initialize(){
    cell.forEach(cell => cell.addEventListener('click' , cellCliked))
    btn.addEventListener('click' , resetButton)
    stats.textContent = `${curentPlayer}'s turn`
    running = true
}
function cellCliked(){
    const cellindex =this.getAttribute("cellindex")
    if(option[cellindex] != '' || !running){
        return;
    }

    updateCell(this,cellindex)
    winCheck()
}
function updateCell(cell, index){
    option[index] = curentPlayer
    cell.textContent = curentPlayer
}

function changePlayer(){
    curentPlayer = (curentPlayer == 'X' ? 'O' : 'X');
    stats.textContent = curentPlayer + 's' + ' turn'
   
    
}
function winCheck(){
    let roundwon= false

    for(let i = 0; i < wincondition.length; i++){
        const condition = wincondition[i]
        const cellA= option[condition[0]]
        const cellB= option[condition[1]]
        const cellC= option[condition[2]]
        
        if(cellA == '' || cellB == '' || cellC == ''){
            continue;
        }   
        if(cellA == cellB && cellB == cellC){
            roundwon = true
            break;
        } 
    }


    if(roundwon){
        stats.textContent = `${curentPlayer} wins`;
        running =false;

    }else if (!option.includes("")){
        stats.textContent = `DRAW`
        running = false
        
 
    } else{
        
            changePlayer()
    }
}
function resetButton(){
     curentPlayer = 'X';
     option = ['' , '' , '' , '' , '' , '' , '' , '' ,'']
    stats.textContent = `${curentPlayer}'s turn `
    cell.forEach(cell => cell.textContent = '')
    running = true


}