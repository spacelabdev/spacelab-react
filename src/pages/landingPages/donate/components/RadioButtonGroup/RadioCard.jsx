const RadioCard = ({ value, handleChange, checked }) => {
	return (
		<>
			<input
				type="radio"
				id={`selection_preset-amounts_${value}`}
				className="radio-btn-input"
				value={value}
				onChange={(e) => handleChange(e.target.value)}
				checked={checked}
			/>
			<label
				className="radio-input-label custom-text"
				htmlFor={`selection_preset-amounts_${value}`}
			>
				{value === "Custom" ? (
					value
				) : (
					<>
						${value}
						<span className="radio-input-span">USD</span>
					</>
				)}
			</label>
		</>
	);
};

export default RadioCard;
