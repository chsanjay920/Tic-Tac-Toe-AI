var filled = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
var filledarray = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

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
    filledarray[sel] = "O";
}
function getindex(index) {
    document.getElementById(index).src = "https://raw.githubusercontent.com/chsanjay920/Tic-Tac-Toe-AI/main/images/machine%20(1).png";
    popElement(index);
    filledarray[index] = "X";
    RandomSelector();
    var flag = verfiwinner();
    if(flag == true){
        location.reload();
    }
}
function verfiwinner(){
    //verify rows
    var f = 0;
    for(var i = 0;i < 9;i++){
        if(filledarray[i] == " "){
            f = 1;
            break;
        }
    }
    if(filledarray[0] == filledarray[1] && filledarray[1] == filledarray[2] && (filledarray[0] === "X" || filledarray[0] === "O")){
        poppingwinner(filledarray[0]+" won the match");
    }
    else if(filledarray[3] == filledarray[4] && filledarray[4] == filledarray[5] && (filledarray[3] === "X" || filledarray[3] === "O")){
        poppingwinner(filledarray[3]+" won the match");
    }
    else if(filledarray[6] == filledarray[7] && filledarray[7] == filledarray[8] && (filledarray[6] === "X" || filledarray[6] === "O")){
        poppingwinner(filledarray[6]+" won the match");
    }
    else if(filledarray[0] == filledarray[3] && filledarray[3] == filledarray[6] && (filledarray[0] === "X" || filledarray[0] === "O")){
        poppingwinner(filledarray[0]+" won the match");
    }
    else if(filledarray[1] == filledarray[4] && filledarray[4] == filledarray[7] && (filledarray[1] === "X" || filledarray[1] === "O")){
        poppingwinner(filledarray[1]+" won the match");
    }
    else if(filledarray[2] == filledarray[5] && filledarray[5] == filledarray[8] && (filledarray[2] === "X" || filledarray[2] === "O")){
        poppingwinner(filledarray[2]+" won the match");
    }
    else if(filledarray[0] == filledarray[4] && filledarray[4] == filledarray[8] && (filledarray[0] === "X" || filledarray[0] === "O")){
        poppingwinner(filledarray[0]+" won the match");
    }
    else if(filledarray[6] == filledarray[4] && filledarray[4] == filledarray[2] && (filledarray[6] === "X" || filledarray[6] === "O")){
        poppingwinner(filledarray[6]+" won the match");
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
