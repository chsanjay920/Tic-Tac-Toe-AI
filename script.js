var filled = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
// var filledarray = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

var dic ={
    "0":"00",
    "1":"01",
    "2":"02",
    "3":"10",
    "4":"11",
    "5":"12",
    "6":"20",
    "7":"21",
    "8":"22",
}

window.onload = function () {
    RandomSelector();
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
    RandomSelector();
    var flag = verfiwinner();
    if(flag == true){
        location.reload();
    }
    console.log(board);
}
function verfiwinner(){
    //verify rows
    var f = 0;
    for(var i = 0;i < 3;i++){
        for(var j=0;j<3;j++){
            if(board[i][j] == " "){
                f = 1;
                break;
            }
        }
    }
    if(board[0][0] == board[0][1] && board[0][1] == board[0][2] && (board[0][0] === "X" || board[0][0] === "O")){
        poppingwinner(board[0][0]+" won the match");
    }
    else if(board[1][0] == board[1][1] && board[1][1] == board[1][2] && (board[1][0] === "X" || board[1][0] === "O")){
        poppingwinner(board[1][0]+" won the match");
    }
    else if(board[2][0] == board[2][1] && board[2][1] == board[2][2] && (board[2][0] === "X" || board[2][0] === "O")){
        poppingwinner(board[2][0]+" won the match");
    }
    else if(board[0][0] == board[1][0] && board[1][0] == board[2][0] && (board[0][0] === "X" || board[0][0] === "O")){
        poppingwinner(board[0][0]+" won the match");
    }
    else if(board[0][1] == board[1][1] && board[1][1] == board[2][1] && (board[0][1] === "X" || board[0][1] === "O")){
        poppingwinner(board[0][1]+" won the match");
    }
    else if(board[0][2] == board[1][2] && board[1][2] == board[2][2] && (board[0][2] === "X" || board[0][2] === "O")){
        poppingwinner(board[0][2]+" won the match");
    }
    else if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && (board[0][0] === "X" || board[0][0] === "O")){
        poppingwinner(board[0][0]+" won the match");
    }
    else if(board[2][0] == board[1][1] && board[1][1] == board[0][2] && (board[2][0] === "X" || board[2][0] === "O")){
        poppingwinner(board[2][0]+" won the match");
    }
    else if(f === 0){
        poppingwinner("draw match");
    }
    else{
        return false;
    }
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
