import React, { useState } from "react";

const RadioButtonGroup = () => {
	const handleChange = (e) => {
		const { value } = e.target;
	};

	return (
		<>
			<div className="preset-amount-wrapper">
				<input
					type="radio"
					name="preset-amounts"
					id="selection_preset-amounts_10"
					className="radio-btn-input"
					value="10"
					onChange={handleChange}
				/>
				<label
					className="radio-input-label"
					htmlFor="selection_preset-amounts_10"
				>
					$10
					<span className="radio-input-span">USD</span>
				</label>
				<input
					type="radio"
					name="preset-amounts"
					id="selection_preset-amounts_25"
					className="radio-btn-input"
					value="25"
					onChange={handleChange}
				/>
				<label
					className="radio-input-label"
					htmlFor="selection_preset-amounts_25"
				>
					$25
					<span className="radio-input-span">USD</span>
				</label>
				<input
					type="radio"
					name="preset-amounts"
					id="selection_preset-amounts_100"
					className="radio-btn-input"
					value="100"
					onChange={handleChange}
				/>
				<label
					className="radio-input-label"
					htmlFor="selection_preset-amounts_100"
				>
					$100
					<span className="radio-input-span">USD</span>
				</label>
				<input
					type="radio"
					name="preset-amounts"
					id="selection_preset-amounts_Other"
					className="radio-btn-input"
					value="custom"
					onChange={handleChange}
				/>
				<label
					className="radio-input-label"
					htmlFor="selection_preset-amounts_Other"
				>
					Custom
				</label>
			</div>
		</>
	);
};

export default RadioButtonGroup;
