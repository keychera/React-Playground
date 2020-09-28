import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Square = ({ value, onClick }) => {
  return (
    <button
      className="square"
      onClick={onClick}
    >
      {value}
    </button>
  )
}

const Board = ({ squares, handleClick }) => {

  const renderSquare = (i) => (
    <Square
      value={squares[i]}
      onClick={() => handleClick(i)}
    />
  )

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

const Game = () => {

  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])
  const [xIsNext, setXIsNext] = useState(true)
  const [isGameOver, setIsGameOver] = useState(false)

  const currentHistory = history[history.length - 1]

  const handleClick = (i) => {
    const newSquares = currentHistory.squares.slice()
    if (!isGameOver && !newSquares[i]) {
      newSquares[i] = xIsNext ? 'X' : 'O'
      setHistory(history.concat([{
        squares: newSquares
      }]))
      setXIsNext(!xIsNext)
    }
  }

  const winner = calculateWinner(currentHistory.squares)
  let status
  if (winner) {
    if (!isGameOver) { setIsGameOver(true) }
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board {...{ squares: currentHistory.squares, handleClick }} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
