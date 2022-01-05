function createRandom() {
  var n = 6 * Math.random();
  n = Math.floor(n) + 1;

  return n;
}
function rollDice() {
  var player1dice = createRandom();
  var player2dice = createRandom();

  var player1image = "images/dice" + player1dice + ".png";
  var player2image = "images/dice" + player2dice + ".png";

  if (player1dice === player2dice) {
    document.querySelector("h1").textContent = "Draw";
  } else if (player1dice > player2dice) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins ";
  }
  document.querySelector(".img1").setAttribute("src", player1image);
  document.querySelector(".img2").setAttribute("src", player2image);
}

document.querySelector("button").addEventListener("click",rollDice);

