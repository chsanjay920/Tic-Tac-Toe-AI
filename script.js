class Move {
	constructor() {
		let row, col;
	}
}

let player = 'x', opponent = 'o';
function isMovesLeft(board) {
	for (let i = 0; i < 3; i++)
		for (let j = 0; j < 3; j++)
			if (board[i][j] == '_')
				return true;

	return false;
}
function evaluate(b) {
	for (let row = 0; row < 3; row++) {
		if (b[row][0] == b[row][1] &&
			b[row][1] == b[row][2]) {
			if (b[row][0] == player)
				return +10;

			else if (b[row][0] == opponent)
				return -10;
		}
	}
	for (let col = 0; col < 3; col++) {
		if (b[0][col] == b[1][col] &&
			b[1][col] == b[2][col]) {
			if (b[0][col] == player)
				return +10;

			else if (b[0][col] == opponent)
				return -10;
		}
	}
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
	return 0;
}
function minimax(board, depth, isMax) {
	let score = evaluate(board);
	if (score == 10)
		return score;
	if (score == -10)
		return score;
	if (isMovesLeft(board) == false)
		return 0;

	if (isMax) {
		let best = -1000;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (board[i][j] == '_') {
					board[i][j] = player;
					best = Math.max(best, minimax(board,
						depth + 1, !isMax));
					board[i][j] = '_';
				}
			}
		}
		return best;
	}
	else {
		let best = 1000;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (board[i][j] == '_') {
					board[i][j] = opponent;
					best = Math.min(best, minimax(board,
						depth + 1, !isMax));
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
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[i][j] == '_') {
				board[i][j] = player;
				let moveVal = minimax(board, 0, false);
				board[i][j] = '_';
				if (moveVal > bestVal) {
					bestMove.row = i;
					bestMove.col = j;
					bestVal = moveVal;
				}
			}
		}
	}

	console.log("The value of the best Move " +
		"is : ", bestVal + "<br><br>");

	return bestMove;
}

var board = [['_', '_', '_'],
['_', '_', '_'],
['_', '_', '_']];


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

var filled = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}

function getindex(index,link) {
	document.getElementById(index).src = "https://raw.githubusercontent.com/chsanjay920/Tic-Tac-Toe-AI/main/images/machine%20(1).png";
	link.onclick = function(event) {
        event.preventDefault();
    }
	popElement(index);
	board[dic[index][0]][dic[index][1]] = "o";

	var flag = verfiwinner();
	if (flag == true) {
		location.reload();
	}
	console.log(board);
	ai();
	verfiwinner();
}

function ai() {
	let bestMove = findBestMove(board);
	board[bestMove.row][bestMove.col] = "x";
	var n = getKeyByValue(dic, bestMove.row + "" + bestMove.col);
	document.getElementById(n).src = "https://raw.githubusercontent.com/chsanjay920/Tic-Tac-Toe-AI/main/images/circle.png";

	console.log("The Optimal Move is :<br>");
	console.log("ROW: " + bestMove.row +
		" COL: " + bestMove.col + "<br>");
	console.log(board);
	verfiwinner();
}
function popElement(n) {
	filled = filled.filter(item => item !== n);
}

function verfiwinner() {
	//verify rows
	if (board[0][0] == board[0][1] && board[0][1] == board[0][2] && (board[0][0] === "x" || board[0][0] === "o")) {
		poppingwinner(board[0][0]);
	}
	else if (board[1][0] == board[1][1] && board[1][1] == board[1][2] && (board[1][0] === "x" || board[1][0] === "o")) {
		poppingwinner(board[1][0]);
	}
	else if (board[2][0] == board[2][1] && board[2][1] == board[2][2] && (board[2][0] === "x" || board[2][0] === "o")) {
		poppingwinner(board[2][0]);
	}
	else if (board[0][0] == board[1][0] && board[1][0] == board[2][0] && (board[0][0] === "x" || board[0][0] === "o")) {
		poppingwinner(board[0][0]);
	}
	else if (board[0][1] == board[1][1] && board[1][1] == board[2][1] && (board[0][1] === "x" || board[0][1] === "o")) {
		poppingwinner(board[0][1]);
	}
	else if (board[0][2] == board[1][2] && board[1][2] == board[2][2] && (board[0][2] === "x" || board[0][2] === "o")) {
		poppingwinner(board[0][2]);
	}
	else if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && (board[0][0] === "x" || board[0][0] === "o")) {
		poppingwinner(board[0][0]);
	}
	else if (board[2][0] == board[1][1] && board[1][1] == board[0][2] && (board[2][0] === "x" || board[2][0] === "o")) {
		poppingwinner(board[2][0]);
	}
	else if (!isMovesLeft(board)) {
		poppingwinner("draw match");
	}
	else {
		return false;
	}
}

function poppingwinner(name) {
	if(name ==="x"){
		var win = "machine won the match";
	}
	else if(name === "o"){
		var win = "you won the match";
	}
	else{
		var win = name;
	}
	var modal = document.getElementById("popup");
	var span = document.getElementsByClassName("close")[0];
	document.getElementById('Winner').innerHTML = win;
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