import React from "react";
import {Form} from "react-bootstrap";
import {useEffectSkipFirstRender} from "../../../../services/utilityFunctions";

/**
 * Display filter options to user for columns with data type 'number' and 'date'
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export default function DiscoveryRowDataFilterNumberAndDate(props) {
	const {
		dataType,
		dataName,
		whereFilter,
		setWhereFilter,
		queryExoplanetDatabase,
	} = props;

	const handleFormValueChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;

		// update operator and value state
		setWhereFilter(prevState => {
			const newDataNameObj = Object.assign(prevState[dataName], {[key]: value})
			return {...prevState, [dataName]: newDataNameObj}
		});
	}

	// Custom hook that executes useEffect hook, provided whereFilter has changed
	useEffectSkipFirstRender(() => {
		queryExoplanetDatabase()
	}, [whereFilter[dataName].operator, whereFilter[dataName].value]);

	const valueFilterJSX = () => {
		switch (dataType) {
			case 'number':
				return (
					<Form.Control
						placeholder={'Number'}
						name={'value'}
						value={whereFilter[dataName]['value']}
						onChange={e => handleFormValueChange(e)}
					/>
				);
			case 'date':
				return (
					<Form.Control
						type={'date'}
						name={'value'}
						value={whereFilter[dataName]['value']}
						onChange={e => handleFormValueChange(e)}
					/>
				);
			default:
		}
	}

	return (
		<>
			{/* todo: [Sven Gerlach] styling */}
			<Form.Control
				as="select"
				name={'operator'}
				value={whereFilter[dataName]['operator']}
				onChange={e => handleFormValueChange(e)}
			>
				<option value={"<"}>&lt;</option>
				<option value={"="}>=</option>
				<option value={">"}>&gt;</option>
			</Form.Control>
			{valueFilterJSX()}
		</>
	);
}
