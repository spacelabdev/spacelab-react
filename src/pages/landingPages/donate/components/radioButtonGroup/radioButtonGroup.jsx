import React, { useState } from "react";
import RadioCard from "./radioCard";
import "./radioButtonGroup.scss";

const RadioButtonGroup = ({ setAmount, name, options }) => {
	const [selected, setSelected] = useState("");
	const [inputVal, setInputVal] = useState("");

	const handleChange = (value) => {
		setSelected(value);

		value === "Custom" ? setInputVal("") : setInputVal(`$ ${value}`);
		value !== "Custom" && setAmount({ name, value: +value });
	};

	const handleInputChange = (e) => {
		const { value } = e.target;
		value.includes("$") ? setInputVal(value) : setInputVal(`$ ${value}`);
		setAmount({
			name,
			value: +value.slice(2),
		});
	};

	return (
		<>
			<div className="preset-amount-wrapper">
				{options.map((val, index) => (
					<RadioCard
						key={index}
						value={val}
						handleChange={handleChange}
						checked={val + "" === selected}
					/>
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
