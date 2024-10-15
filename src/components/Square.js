import React from 'react'

const Square = ({ value }) => {
	const handleOnClick = () => {
		console.log("CLICK CLICK");
	}
	return (
		<button
			onClick={handleOnClick}
			className="square"
		>
			{value}
		</button>
	)
}

export default Square