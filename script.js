class Move {
    constructor() {
        let row, col;
    }
}

let player = 'O', opponent = 'X';
var filled = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
// var filledarray = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

var dic = {
    "0": "00",
    "1": "01",
    "2": "02",
    "3": "10",
    "4": "11",
    "5": "12",
    "6": "20",
    "7": "21",
    "8": "22",
}

window.onload = function () {
    RandomSelector();
    // board[1][1] = "O";
    // document.getElementById(4).src = "https://raw.githubusercontent.com/chsanjay920/Tic-Tac-Toe-AI/main/images/circle.png";
}
function popElement(n) {
    filled = filled.filter(item => item !== n);
}
function RandomSelector() {
    var sel = filled[Math.floor(Math.random() * filled.length)];
    popElement(sel);
    document.getElementById(sel).src = "https://raw.githubusercontent.com/chsanjay920/Tic-Tac-Toe-AI/main/images/circle.png";
    // filledarray[sel] = "O";
    board[dic[sel][0]][dic[sel][1]] = "O";
}
function getindex(index) {
    document.getElementById(index).src = "https://raw.githubusercontent.com/chsanjay920/Tic-Tac-Toe-AI/main/images/machine%20(1).png";
    popElement(index);
    // filledarray[index] = "X";
    board[dic[index][0]][dic[index][1]] = "X";
    // RandomSelector();
    ai();
    var flag = verfiwinner();
    if (flag == true) {
        location.reload();
    }
    console.log(board);
}
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function ai() {
    b = findBestMove(board);
    board[b.row][b.col] = "O";
    var n = getKeyByValue(dic, b.row+""+b.col);
    document.getElementById(n).src = "https://raw.githubusercontent.com/chsanjay920/Tic-Tac-Toe-AI/main/images/circle.png";
}
function verfiwinner() {
    //verify rows
    if (board[0][0] == board[0][1] && board[0][1] == board[0][2] && (board[0][0] === "X" || board[0][0] === "O")) {
        poppingwinner(board[0][0] + " won the match");
    }
    else if (board[1][0] == board[1][1] && board[1][1] == board[1][2] && (board[1][0] === "X" || board[1][0] === "O")) {
        poppingwinner(board[1][0] + " won the match");
    }
    else if (board[2][0] == board[2][1] && board[2][1] == board[2][2] && (board[2][0] === "X" || board[2][0] === "O")) {
        poppingwinner(board[2][0] + " won the match");
    }
    else if (board[0][0] == board[1][0] && board[1][0] == board[2][0] && (board[0][0] === "X" || board[0][0] === "O")) {
        poppingwinner(board[0][0] + " won the match");
    }
    else if (board[0][1] == board[1][1] && board[1][1] == board[2][1] && (board[0][1] === "X" || board[0][1] === "O")) {
        poppingwinner(board[0][1] + " won the match");
    }
    else if (board[0][2] == board[1][2] && board[1][2] == board[2][2] && (board[0][2] === "X" || board[0][2] === "O")) {
        poppingwinner(board[0][2] + " won the match");
    }
    else if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && (board[0][0] === "X" || board[0][0] === "O")) {
        poppingwinner(board[0][0] + " won the match");
    }
    else if (board[2][0] == board[1][1] && board[1][1] == board[0][2] && (board[2][0] === "X" || board[2][0] === "O")) {
        poppingwinner(board[2][0] + " won the match");
    }
    else if (!ismovesleft(board)) {
        poppingwinner("draw match");
    }
    else {
        return false;
    }
}

function ismovesleft(board) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[i][j] === " ") {
                return true;
            }
        }
    }
    return false;
}
function poppingwinner(name) {
    var modal = document.getElementById("popup");
    var span = document.getElementsByClassName("close")[0];
    document.getElementById('Winner').innerHTML = name;
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
        location.reload();
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            location.reload();
        }
    }
}
// ---------------------------------------------------------------------------------------
//ai functioning started


function evaluate(b) {

    // Checking for Rows for X or O victory.
    for (let row = 0; row < 3; row++) {
        if (b[row][0] == b[row][1] &&
            b[row][1] == b[row][2]) {
            if (b[row][0] == player)
                return +10;

            else if (b[row][0] == opponent)
                return -10;
        }
    }

    // Checking for Columns for X or O victory.
    for (let col = 0; col < 3; col++) {
        if (b[0][col] == b[1][col] &&
            b[1][col] == b[2][col]) {
            if (b[0][col] == player)
                return +10;

            else if (b[0][col] == opponent)
                return -10;
        }
    }

    // Checking for Diagonals for X or O victory.
    if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) {
        if (b[0][0] == player)
            return +10;

        else if (b[0][0] == opponent)
            return -10;
    }

    if (b[0][2] == b[1][1] &&
        b[1][1] == b[2][0]) {
        if (b[0][2] == player)
            return +10;

        else if (b[0][2] == opponent)
            return -10;
    }

    // Else if none of them have
    // won then return 0
    return 0;
}

function minimax(board, depth, isMax) {
    let score = evaluate(board);

    // If Maximizer has won the game
    // return his/her evaluated score
    if (score == 10)
        return score;

    // If Minimizer has won the game
    // return his/her evaluated score
    if (score == -10)
        return score;

    // If there are no more moves and
    // no winner then it is a tie
    if (ismovesleft(board) == false)
        return 0;

    // If this maximizer's move
    if (isMax) {
        let best = -1000;

        // Traverse all cells
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {

                // Check if cell is empty
                if (board[i][j] == '_') {

                    // Make the move
                    board[i][j] = player;

                    // Call minimax recursively
                    // and choose the maximum value
                    best = Math.max(best, minimax(board,
                        depth + 1, !isMax));

                    // Undo the move
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }

    // If this minimizer's move
    else {
        let best = 1000;

        // Traverse all cells
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {

                // Check if cell is empty
                if (board[i][j] == '_') {

                    // Make the move
                    board[i][j] = opponent;

                    // Call minimax recursively and
                    // choose the minimum value
                    best = Math.min(best, minimax(board,
                        depth + 1, !isMax));

                    // Undo the move
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }
}
function findBestMove(board) {

    let bestVal = -1000;
    let bestMove = new Move();
    bestMove.row = -1;
    bestMove.col = -1;

    // Traverse all cells, evaluate
    // minimax function for all empty
    // cells. And return the cell
    // with optimal value.
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            // Check if cell is empty
            if (board[i][j] == ' ') {

                // Make the move
                board[i][j] = player;

                // compute evaluation function
                // for this move.
                let moveVal = minimax(board, 0, false);

                // Undo the move
                board[i][j] = ' ';

                // If the value of the current move
                // is more than the best value, then
                // update best
                if (moveVal > bestVal) {
                    bestMove.row = i;
                    bestMove.col = j;
                    bestVal = moveVal;
                }
            }
        }
    }

    // document.write("The value of the best Move " +
    //                "is : ", bestVal + "<br><br>");

    return bestMove;
}