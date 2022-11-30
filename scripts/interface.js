document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll("td");

    squares.forEach((squares)=>{
        squares.addEventListener('click', handleCleck)
    })

})

function handleCleck(event){
    
    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        if(playerTime == 0){
                var vencedor = "escudo"
            } else {
                var vencedor = "espada"
            }
        setTimeout(() => {
            alert('jogo acabou, o ' + vencedor + " foi o vencedor")
            alert('reiniciando jogo')
            window.location.reload()
        }, 1)
    } else {
        let space = 0
        for(let c = 0; c < board.length; c++){
            if(board[c] == ""){
                space++
            }
        }
        if(space == 0){
            alert("deu impate")
            alert('reiniciando jogo')
            window.location.reload()
        }
    }
    updateSquares(position)
}

function updateSquares(position){
    let squares = document.getElementById(position.toString())
    let symbols = board[position];
    squares.innerHTML = `<div class="${symbols}"></div>`
}
/* function updateSquares() {

    let squares = document.querySelectorAll("td");

    squares.forEach((squares)=>{

        let position = squares.id;
        let symbols = board[position];

        if( symbols != ''){
            squares.innerHTML = `<div class="${symbols}"></div>`
        }
    })
} */