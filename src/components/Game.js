import React, { useState } from 'react'
import Board from './Board'

const Game = () => {
	const [xIsNext, setXIsNext] = useState(true);
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);

	const currentSquares = history[currentMove];

	const handlePlay = (nextSquares) => {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
		setXIsNext(!xIsNext);
	}
	const jumpTo = (nextMove) => {
		setCurrentMove(nextMove);
		setXIsNext(nextMove % 2 === 0);
	}

	const moves = history.map((squares, move) => {
		let description = move > 0 ? 'Go to move #' + move : "Go to game start";
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		)
	})

	return (
		<div className="game">
			<div className="game-board">
				<Board
					xIsNext={xIsNext}
					squares={currentSquares}
					onPlay={(next) => handlePlay(next)}
				/>
			</div>
			<div className="game-info">
				<ol>
					{moves}
				</ol>
			</div>
		</div>
	)
}

export default Game