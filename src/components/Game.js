import React, { useState } from 'react'
import Board from './Board'

const Game = () => {
	const [xIsNext, setXIsNext] = useState(true);
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const currentSquares = history[history.length - 1];

	const handlePlay = (nextSquares) => {
		const nextHistory = history.slice(0, history.length);
		setHistory([...nextHistory, nextSquares]);
		setXIsNext(!xIsNext);
	}
	const jumpTo = () => {
		// TODO
	}

	const moves = history.map((squares, move) => {
		let description = move > 0 ? 'Go to move #' + move : "Go to game start";
		return (
			<li>
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