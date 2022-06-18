import React from "react";
import { nanoid } from "nanoid";
import Die from "./Die";
import Confetti from "react-confetti";
import "./Game.css";

export default function Game() {
  function generateNewDie() {
    return {
      id: nanoid(),
      isHeld: false,
      number: Math.ceil(Math.random() * 6),
    };
  }

  const allNewDice = (_) => {
    const newDiceArr = [];
    for (let i = 0; i < 10; i++) {
      newDiceArr.push(generateNewDie());
    }
    return newDiceArr;
  };

  const [diceArr, setDiceArr] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const value = diceArr[0].number;
    if (diceArr.every((die) => die.isHeld === true && die.number === value)) {
      setTenzies(true);
    }
    if (tenzies === true) {
      window.location.reload();
    }
  }, [diceArr]);

  const holdDice = function (id) {
    setDiceArr((prevDiceArr) => {
      return prevDiceArr.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  };

  const rollDice = function (id) {
    setDiceArr((prevDiceArr) =>
      prevDiceArr.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  };

  const diceElements = diceArr.map((die) => (
    <Die
      key={die.id}
      number={die.number}
      isHeld={die.isHeld}
      holdDice={() => {
        holdDice(die.id);
      }}
    />
  ));

  return (
    <main className="game">
      {tenzies && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <section className="game__dice">{diceElements}</section>
      <button type="button" className="game__dice__roll-btn" onClick={rollDice}>
        {tenzies === true ? "New Game!" : "Roll"}
      </button>
    </main>
  );
}
