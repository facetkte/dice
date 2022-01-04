

  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomNumber2 = Math.floor(Math.random() * 6) + 1; //dice2  1-6

  var diceString1 = "images/dice" + randomNumber1 + ".png"; //diceX.png

  var diceString2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", diceString1);

  document.querySelectorAll("img")[1].setAttribute("src", diceString2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = ("🚩Player 1 Win");
  } else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = ("Draw");
  } else {
    document.querySelector("h1").innerHTML = ("Player 2 Win🚩");
  }

$("button").click(function() {
  next();
});
