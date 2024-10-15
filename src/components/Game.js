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

	return (
		<div className="game">
			<div className="game-board">
				<Board
					xIsNext={xIsNext}
					squares={currentSquares}
					onPlay={handlePlay}
				/>
			</div>
			<div className="game-info">
				<ol></ol>
			</div>
		</div>
	)
}

export default Game