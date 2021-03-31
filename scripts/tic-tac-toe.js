var playerTurn = 1;
var win = -1;
var counterClick = 0;
var matrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
]

function playerMarker(element, row, column) {

if(element.innerHTML != "")return;
if(win != -1) return;

counterClick++;

matrix[row][column] = playerTurn;
if(playerTurn == 1){
    element.innerHTML = "X";
    document.getElementById("messageArea").innerHTML = "Player 2 Turn!"
    playerTurn = 2;
}

else if(playerTurn == 2) {
    element.innerHTML = "O";
    document.getElementById("messageArea").innerHTML = "Player 1 Turn!"
    playerTurn = 1;
}

for(var i=0; i<3; i++) {

    if(matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) win = matrix[i][0];
    if(matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i]) win = matrix[0][i];
}

if(matrix[0][0] == matrix[1][1] == matrix[2][2]) win = matrix[1][1];
if(matrix[0][2] == matrix[1][1] == matrix[2][0]) win = matrix[1][1];

if(win != -1){
    document.getElementById("messageArea").innerHTML = "Player " + win + " has won!";
}

if(counterClick == 9 && win == -1) {
    document.getElementById("messageArea").innerHTML = "It Is A TIE!";
}
}
