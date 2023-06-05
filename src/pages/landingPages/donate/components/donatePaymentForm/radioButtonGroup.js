import React, { useState } from "react";

const options = [10, 25, 100, "Custom"];

const RadioButtonGroup = ({ setAmount }) => {
	const [selected, setSelected] = useState("");
	const [inputVal, setInputVal] = useState("");

	const handleChange = (e) => {
		const { value } = e.target;
		setSelected(value);

		value === "Custom" ? setInputVal("") : setInputVal(`$ ${value}`);
		value !== "Custom" && setAmount(value);
	};

	const handleInputChange = (e) => {
		const { value } = e.target;
		value.includes("$") ? setInputVal(value) : setInputVal(`$ ${value}`);
		setAmount(value.slice(1));
	};

	return (
		<>
			<div className="preset-amount-wrapper">
				{options.map((val) => (
					<React.Fragment key={val}>
						<input
							type="radio"
							name="preset-amounts"
							id={`selection_preset-amounts_${val}`}
							className="radio-btn-input"
							value={val}
							onChange={handleChange}
						/>
						<label
							className="radio-input-label"
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
