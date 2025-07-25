import React, { useEffect, useState } from "react";
import "./styles.css";

// 0 1 2
// 3 4 5
// 6 7 8

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xturn, setXTurn] = useState(true);
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");
  console.log(squares);

  function handleClick(index) {
    console.log("called");
    const cpySquares = [...squares];
    if (cpySquares[index]) return;
    cpySquares[index] = xturn ? "X" : "O";
    setSquares(cpySquares);
    setXTurn(!xturn);
  }

  function getWinner(squares) {
    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i]; //destructuring each pattern
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        console.log("win");
        return squares[x];
      }
    }
    return null;
  }

  function handleRestart() {
    setXTurn(true);
    setSquares(Array(9).fill(""));
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${xturn ? "X" : "O"}`);
    }
  }, [squares, xturn]);

  return (
    <div className="container">
      <div>TicTacToe</div>
      <div>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default TicTacToe;
