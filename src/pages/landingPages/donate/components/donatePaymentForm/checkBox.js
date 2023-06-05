const CheckBox = ({ checked = false, setChecked }) => {
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
					className="cover-fee"
					onClick={() => setChecked(!checked)}
				>
					Add <span className="cover-fee-bold">$0.00 USD</span> to
					help cover the fees.
				</label>
			</div>
		</>
	);
};

export default CheckBox;
