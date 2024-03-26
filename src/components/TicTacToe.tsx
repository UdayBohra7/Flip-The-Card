import { useRef, useState } from "react";
import GameLayout from "../layouts/GameLayout";

const winningPattern = [
  [0, 1, 2, 18, 0, 0],
  [3, 4, 5, 50, 0, 0],
  [6, 7, 8, 84, 0, 0],
  [0, 3, 6, 0, 18, 90],
  [1, 4, 7, 0, 50, 90],
  [2, 5, 8, 0, 50, 90],
  [0, 4, 8, 0, 0, 45],
  [2, 4, 6, 0, 100, 135],
];
let player: any = "X";
const TicTacToe = () => {
  const ref: any = useRef(null);
  const [isWin, setIsWin] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");

  function myTurn(event: any) {
    event.target.innerText = player;
    event.target.disabled = true;
    checkResult();
    if (player === "X") {
      player = "0";
    } else {
      player = "X";
    }
  }

  function checkResult() {
    let boxes: any = document.querySelectorAll(".boxes");
    winningPattern.forEach((ele: any) => {
      if (boxes[ele[0]].innerText !== "") {
        if (
          boxes[ele[0]].innerText === boxes[ele[1]].innerText &&
          boxes[ele[0]].innerText === boxes[ele[2]].innerText
        ) {
          setWinner(boxes[ele[0]].innerText);
          ref.current.style.display = "block";
          ref.current.style.top = ele[3] + "%";
          ref.current.style.left = ele[4] + "%";
          ref.current.style.rotate = ele[5] + "deg";
          boxes.forEach((box: any) => {
            box.disabled = true;
          });
          setIsWin(true);
        }
      }
    });
  }

  function playAgain() {
    let boxes: any = document.querySelectorAll(".boxes");
    boxes.forEach((box: any) => {
      box.disabled = false;
      box.innerText = "";
    });
    ref.current.style.display = "none";

    setIsWin(false);
  }

  return (
    <>
      <GameLayout tittle="Tic Tac Toe Game">
        <div className="w-[300px] m-auto bg-white text-black font-semibold text-7xl rounded text-center relative">
          {[0, 1, 2].map((ele: any) => {
            return (
              <div key={ele} className="flex">
                {[0, 1, 2].map((btn: any) => {
                  return (
                    <button
                      key={btn}
                      onClick={myTurn}
                      className="border h-[100px] w-[100px] rounded boxes"
                    ></button>
                  );
                })}
              </div>
            );
          })}
          <div
            ref={ref}
            className={`hidden absolute origin-top-left t h-2 w-full bg-red-900`}
          ></div>
        </div>
        {isWin && (
          <div className="mt-5 space-y-2 text-center">
            <p className="bg-green-900">{winner} won this game</p>
            <button onClick={playAgain} className="py-1 px-2 bg-blue-800">Play Again</button>
          </div>
        )}
      </GameLayout>
    </>
  );
};

export default TicTacToe;
