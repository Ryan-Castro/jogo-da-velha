let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false


function handleMove(position) {

    if (gameOver) {
        return;
    }
    if (board[position] == '') {

        board[position] = symbols[playerTime]

        gameOver = isWin()

        if (gameOver == false) {

            playerTime = (playerTime == 0) ? 1 : 0;
        }
    } else {
        alert("espaço já utilizado")
    }
    return gameOver
}

function isWin() {

    let winState = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < winState.length; i++) {
        let seq = winState[i];

        if (board[seq[0]] == board[seq[1]] &&
            board[seq[0]] == board[seq[2]] &&
            board[seq[0]] != '') {
            return true
        }
    }

    return false
}