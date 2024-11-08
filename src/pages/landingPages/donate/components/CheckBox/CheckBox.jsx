import "./checkBox.scss";

const CheckBox = ({ checked = false, setChecked, amount, name }) => {
	const fee = (amount * 0.08).toFixed(2);

	return (
		<>
			<div className={"donate-checkbox-wrapper"}>
				<input
					type={"checkbox"}
					className="donate-checkbox"
					name={name}
					checked={checked}
					readOnly
				/>
				<label
					className="cover-fee custom-text"
					onClick={() => setChecked({ name, value: !checked })}
				>
					Add <span className="cover-fee-bold">${fee} USD</span> to
					help cover the fees.
				</label>
			</div>
		</>
	);
};

export default CheckBox;
