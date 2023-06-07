import React, { useState } from "react";

const RadioButtonGroup = ({ setAmount, name, options }) => {
	const [selected, setSelected] = useState("");
	const [inputVal, setInputVal] = useState("");

	const handleChange = (e) => {
		const { value } = e.target;
		setSelected(value);

		value === "Custom" ? setInputVal("") : setInputVal(`$ ${value}`);
		value !== "Custom" && setAmount({ name, value: +value });
	};

	const handleInputChange = (e) => {
		const { value } = e.target;
		console.log(value);
		value.includes("$") ? setInputVal(value) : setInputVal(`$ ${value}`);
		setAmount({
			name,
			value: +value.slice(2),
		});
	};

	return (
		<>
			<div className="preset-amount-wrapper">
				{options.map((val) => (
					<React.Fragment key={val}>
						<input
							type="radio"
							name={name}
							id={`selection_preset-amounts_${val}`}
							className="radio-btn-input"
							value={val}
							onChange={handleChange}
						/>
						<label
							className="radio-input-label custom-text"
							htmlFor={`selection_preset-amounts_${val}`}
						>
							{val === "Custom" ? (
								val
							) : (
								<>
									${val}
									<span className="radio-input-span">
										USD
									</span>
								</>
							)}
						</label>
					</React.Fragment>
				))}
			</div>
			<div className="input-container">
				<input
					value={inputVal}
					className="custom-text"
					disabled={selected !== "Custom"}
					onChange={handleInputChange}
					placeholder={
						selected !== "Custom"
							? "$ Donation amount"
							: "Enter custom amount"
					}
				/>
			</div>
		</>
	);
};

export default RadioButtonGroup;
