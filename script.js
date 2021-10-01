var filled = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
var userSelector = [[" ", " ", " "],
[" ", " ", " "],
[" ", " ", " "]
];
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
    userSelector[sel[0]][sel[1]] = "X";
}

function func(row, col, id) {
    document.getElementById(id).src = "https://raw.githubusercontent.com/chsanjay920/Tic-Tac-Toe-AI/main/images/machine%20(1).png";
    userSelector[id[0]][id[1]] = "O";
    popElement(id);
    RandomSelector();
    console.log(userSelector);
    verifywin()
}

function verifywin() {
    var diganolsofuser = 0, revdiganolsofuser = 0, diganols = 0, revdiganols = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (i == j) {
                if (userSelector[i][j] == "O")
                    diganolsofuser++;
                if (userSelector[i][j] == "X")
                    diganols++;
            }
            if (i + j == 2) {
                if (userSelector[i][j] == "O")
                    revdiganolsofuser++;
                if (userSelector[i][j] == "X")
                    revdiganols++;
            }
        }
    }
    if (diganolsofuser == 3 || revdiganolsofuser == 3 || (
        (userSelector[0][0] == "O" && userSelector[0][1] == "O" && userSelector[0][2] == "O") ||
        (userSelector[1][0] == "O" && userSelector[1][1] == "O" && userSelector[1][2] == "O") ||
        (userSelector[2][0] == "O" && userSelector[2][1] == "O" && userSelector[2][2] == "O") ||
        (userSelector[0][0] == "O" && userSelector[1][0] == "O" && userSelector[2][0] == "O") ||
        (userSelector[0][1] == "O" && userSelector[1][1] == "O" && userSelector[2][1] == "O") ||
        (userSelector[0][2] == "O" && userSelector[1][2] == "O" && userSelector[2][2] == "O")
    )) {
        console.log("user winns WON THE GAME");
        // alert("you won");
        winner("YOU WON THE GAME");
    }
    else if (diganols == 3 || revdiganols == 3 || (
        (userSelector[0][0] == "X" && userSelector[0][1] == "X" && userSelector[0][2] == "X") ||
        (userSelector[1][0] == "X" && userSelector[1][1] == "X" && userSelector[1][2] == "X") ||
        (userSelector[2][0] == "X" && userSelector[2][1] == "X" && userSelector[2][2] == "X") ||
        (userSelector[0][0] == "X" && userSelector[1][0] == "X" && userSelector[2][0] == "X") ||
        (userSelector[0][1] == "X" && userSelector[1][1] == "X" && userSelector[2][1] == "X") ||
        (userSelector[0][2] == "X" && userSelector[1][2] == "X" && userSelector[2][2] == "X")
    )) {
        console.log("machine winns");
        // alert("machine won");
        winner("MACHINE WON THE GAME");
    }
    else{
        winner("DRAW MATCH");
    }
}

function winner(name) {
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
