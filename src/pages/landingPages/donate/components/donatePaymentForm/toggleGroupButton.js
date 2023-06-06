const options = ["One Time", "Monthly"];

const ToggleGroup = ({ selected = options[0], setFrequency }) => {
	return (
		<>
			{options.map((option) => (
				<button
					className={`text-caption-tab ${
						selected === option ? "active" : ""
					}`}
					type="button"
					role="tab"
					key={option}
					onClick={() => setFrequency(option)}
				>
					<span className="custom-text">{option}</span>
				</button>
			))}
		</>
	);
};

const ToggleGroupButton = (props) => {
	return (
		<div className="tab-group-container">
			<div className="tab-group">
				<ToggleGroup {...props} />
			</div>
		</div>
	);
};

export default ToggleGroupButton;
