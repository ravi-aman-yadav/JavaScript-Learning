let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".mssg-container");
let msg = document.querySelector("#msg")
let draw = document.querySelector(".draw");
let drawGamemsg = document.querySelector("#drawGame");

let turn0 = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
}

const drawGame = () => {
    drawGamemsg.innerText = "It's a draw";
    draw.classList.remove("hi");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      //playerO
      box.innerText = "O";
      turn0 = false;
    } else {
      //playerX
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    count += 1;
    if(count < 9) {
        checkWinner();
    } else {
        drawGame();
        count = 0;
    }
    
  });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congo, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count = 0;
}

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;
    if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if(pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
        }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
