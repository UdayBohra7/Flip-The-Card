import { useState } from "react";

const deck = [
  "A of ♠️",
  "9 of ♥️",
  "J of ♦️",
  "A of ♠️",
  "5 of ♣️",
  "7 of ♣️",
  "5 of ♣️",
  "9 of ♥️",
  "7 of ♣️",
  "7 of ♥️",
  "J of ♦️",
  "8 of ♦️",
  "K of ♦️",
  "7 of ♥️",
  "8 of ♦️",
  "K of ♦️",
];

const FlipTheCard = () => {
  const [previous, setPrevious] = useState<any>({
    key: "",
    text: "",
  });
  const [trueResult, setTrueResult] = useState<any>([]);
  const [cards, setCards] = useState<any>([...deck]);

  function flipCard(event: any, key: any) {
    event?.target.classList.add("flip");
    if (previous.key === "") {
      setPrevious({
        key,
        text: event?.target.innerText,
      });
    } else {
      if (previous.text === event.target.innerText) {
        setTrueResult((prev: any) => [...prev, previous.key, key]);
      } else {
        setTimeout(() => {
          let boxes = document.querySelectorAll(".item");
          boxes.forEach((box: any, index: any) => {
            if (!trueResult.includes(index)) {
              box.classList.remove("flip");
            }
          });
          event.target.classList.remove("flip");
        }, 500);
      }
      setPrevious({
        key: "",
        text: "",
      });
    }
  }

  function resetGame() { 
    setPrevious({
      key: "",
      text: "",
    });
    setTrueResult([])
    let flippedBoxes = document.querySelectorAll(".flip");
    flippedBoxes.forEach((flippedBox:any) => {
      flippedBox.classList.remove("flip");
    });
    setCards((prev:any) => prev.sort(() => Math.random() > 0.5 ? 2 : -1));
  }

  return (
    <div className="container">
      <h2>Flip the card</h2>
      <div className="game">
        {cards.map((ele: any, key: any) => {
          return (
            <div
              onClick={(event: any) => {
                flipCard(event, key);
              }}
              className="item"
            >
              {ele}
            </div>
          );
        })}
      </div>
      <button onClick={resetGame} className="reset">RESET GAME</button>
    </div>
  );
};

export default FlipTheCard;