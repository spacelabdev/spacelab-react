import "./toggleGroupButton.scss";

const ToggleGroup = ({ selected, handleChange, options, name }) => {
	return (
		<div className="toggle-group">
			{options.map((option) => (
				<button
					className={`text-caption-tab custom-text ${
						selected === option ? "active" : ""
					}`}
					type="button"
					role="tab"
					name={name}
					key={option}
					onClick={(e) => handleChange({ name, value: option })}
				>
					{option}
				</button>
			))}
		</div>
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
