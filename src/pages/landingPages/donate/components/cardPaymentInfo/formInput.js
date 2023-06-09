const FormInput = ({
	name,
	type,
	placeholder,
	onChange,
	className,
	value,
	error,
	children,
	label,
	...props
}) => {
	return (
		<>
			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				className={`${className} ${error ? "input-error" : ""}`}
			/>
			{/* {error && <p>{error}</p>} */}
		</>
	);
};

FormInput.defaultProps = {
	type: "text",
	className: "",
};

export default FormInput;
