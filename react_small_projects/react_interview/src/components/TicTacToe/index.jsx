// 0 1 2
// 3 4 5
// 6 7 8
import { useEffect, useState } from "react";
import "./Styles.css";
function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTern] = useState(true);
  const[status,setStatus]=useState("")

  function handleClick(getCurrentSquare) {
    let copySquares = [...squares];
    if (getWinner(copySquares) || copySquares[getCurrentSquare]) return;
    copySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTern(!isXTurn);
    setSquares(copySquares);
  }

  function getWinner(squares) {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  useEffect(()=>{
    if(!getWinner(squares) && squares.every(item => item !== "")){
        setStatus("This is a draw! Please restart the game")
    }else if (getWinner(squares)){
        setStatus(`Winner is ${getWinner(squares)}`)
    }else{
        setStatus(`Next palyer is ${isXTurn ? "X" : "O"}`)
    }


  },[squares,isXTurn])

  function handleRestart(){
    setIsXTern(true)
    setSquares(Array(9).fill(""))
  }

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button
      className="reset"
      onClick={handleRestart}
      >Restart</button>
    </div>
  );
};

export default TicTacToe;
