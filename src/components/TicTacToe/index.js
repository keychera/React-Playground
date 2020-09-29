import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import './style.css'

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

const TicTacToe = () => {

  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])
  const [xIsNext, setXIsNext] = useState(true)
  const [isGameOver, setIsGameOver] = useState(false)
  const [currentMove, setCurrentMove] = useState(0)

  const currentHistory = history.slice(0, currentMove + 1)
  const currentSquares = currentHistory[currentMove]

  const handleClick = (i) => {
    const newSquares = currentSquares.squares.slice()
    if (!isGameOver && !newSquares[i]) {
      newSquares[i] = xIsNext ? 'X' : 'O'
      setHistory(currentHistory.concat([{
        squares: newSquares
      }]))
      setXIsNext(!xIsNext)
      setCurrentMove(currentHistory.length)
    }
  }

  const winner = calculateWinner(currentSquares.squares)
  let status
  if (winner) {
    if (!isGameOver) { setIsGameOver(true) }
    status = `Winner: ${winner}`
  } else {
    if (isGameOver) { setIsGameOver(false) }
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  const jumpTo = (move) => {
    setCurrentMove(move)
    setXIsNext((move % 2) === 0)
  }

  const moves = currentHistory.map((step, move) => {
    const desc = move
      ? 'Go to move #' + move
      : 'Go to game start'
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <Helmet>
        <title>Tic Tac Toe</title>
      </Helmet>
      <div className="game-board">
        <Board {...{ squares: currentSquares.squares, handleClick }} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default TicTacToe
