import React, { useState } from 'react'

const Square = () => {
	const [value, setValue] = useState(null);

	const handleOnClick = () => {
		setValue('X')
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