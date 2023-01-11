let audioTurn = new Audio("ting.mp3");
let turn = "X";
let gameover = false;
let drawCount = 0;
// function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
// function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    console.log(e)
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText && // boxtext[2] === boxtext[5]
      boxtext[e[2]].innerText === boxtext[e[1]].innerText && // boxtext[8] === boxtext[5]
      boxtext[e[0]].innerText !== "" // boxtext[0] !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      gameover = true;
      document
        .querySelector(".img-box")
        .getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};
// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && gameover === false) {
      boxtext.innerText = turn;
      drawCount++
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
    if(drawCount === 9 && gameover === false) {
      document.getElementsByClassName("info")[0].innerText = "Match has been drawn!";
    }
  });
});

// add on click listener to reset button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  drawCount = 0;
  gameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document
    .querySelector(".img-box")
    .getElementsByTagName("img")[0].style.width = "0px";
});
