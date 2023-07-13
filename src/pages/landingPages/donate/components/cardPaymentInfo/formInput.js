// The "readonly" input is set to "true" as the debit or credit card feature is currently unsupported.
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
				readOnly={true}
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
