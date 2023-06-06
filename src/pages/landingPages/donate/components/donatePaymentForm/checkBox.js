const CheckBox = ({ checked = false, setChecked, amount }) => {
	const fee = (amount * 0.08).toFixed(2);

	return (
		<>
			<div
				className={"donate-checkbox-wrapper"}
				onClick={() => setChecked(!checked)}
			>
				<input
					type={"checkbox"}
					className="donate-checkbox"
					name="cover-fee"
					checked={checked}
					readOnly
				/>
				<label
					className="cover-fee custom-text"
					onClick={() => setChecked(!checked)}
				>
					Add <span className="cover-fee-bold">${fee} USD</span> to
					help cover the fees.
				</label>
			</div>
		</>
	);
};

export default CheckBox;
