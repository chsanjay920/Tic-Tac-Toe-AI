var filled = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
function func(name) {
    document.getElementById(name).src = "./images/x.jpg";
    pushtoarray(name);
    myturn();
}
function pushtoarray(n) {
    filled = filled.filter(item => item !== n);
}

function myturn() {
    var sel = filled[Math.floor(Math.random() * filled.length)];
    filled = filled.filter(item => item !== sel);
    document.getElementById(sel).src = "./images/o.png";
}

function func(row, col) {
    alert(row + " " + col);
}