var filled = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
var userSelector = [[" "," "," "],
                    [" "," "," "],
                    [" "," "," "] 
                   ];
var machineSelector = [[" "," "," "],
                       [" "," "," "],
                       [" "," "," "]
                     ];

function popElement(n) {
    filled = filled.filter(item => item !== n);
}

function RandomSelector() {
    var sel = filled[Math.floor(Math.random() * filled.length)];
    popElement(sel);
    document.getElementById(sel).src = "./images/o.png";
    machineSelector[sel[0]][sel[1]] = "X";
}

function func(row, col, id) {
    document.getElementById(id).src = "./images/x.jpg";
    userSelector[id[0]][id[1]] = "O";
    popElement(id);
    RandomSelector();
    console.log(userSelector);
}

function verifywin(){
    var diganols = 0,revdiganols=0;
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(i == j){
                if(userSelector[i][j]!=" ")
                diganols++;
            }
            if(i+j == 2){
                if(userSelector[i][j]!=" ")
                revdiganols++;
            }
        }
    }
    if(diganols == 3 || revdiganols == 3){
        console.log("user winns");
    }
    else{
        console.log("not a winner");
    }
}