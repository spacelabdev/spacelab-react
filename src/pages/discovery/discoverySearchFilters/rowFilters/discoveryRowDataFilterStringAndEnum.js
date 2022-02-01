import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {getExoplanets} from "../../../../services/calTechApiRequest";


/**
 * Display filter options to users for columns with data type 'string' and 'enum'
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export default function DiscoveryRowDataFilterStringAndEnum(props) {
	const {
		dataType,
		dataName,
		whereFilter,
		setWhereFilter,
	} = props;

	const [enumAttributes, setEnumAttributes] = useState([]);

	/**
	 * Upon mounting the component with a dataType of enum, make API call to retrieve all possible enum attributes
	 * run effect only if dataName changes
	 */
	useEffect(() => {
		// todo: [Sven Gerlach] making an API call takes too long and hence leads to poor UX
		if (dataType === 'enum') {
			// make API call to retrieve complete column data across all rows
			getExoplanets({select: {[dataName]: true}})
				.then(res => {
					const enumAttributes = []
					res.data.forEach(row => {
						enumAttributes.push(...Object.values(row));
					});

					// convert enumAttributes array into enumSet (non-overlapping, unique attributes)
					const enumSet = new Set(enumAttributes);
					// convert set back to array
					const enumSetArray = Array.from(enumSet);
					// remove 'null' values
					const enumSetExNullValues = enumSetArray.filter(attribute => attribute);

					setEnumAttributes(prevState => {
						return [...prevState, ...enumSetExNullValues]
					});
				})
				.catch(e => console.error(e));
		}
	}, [dataName, dataType]);

	/**
	 * Update state with form values
	 * @param e
	 */
	const handleFormValueChange = (e) => {
		const key = e.target.name
		const value = e.target.value

		setWhereFilter(prevState => {
			const newDataNameObj = Object.assign(prevState[dataName], {[key]: value})
			return {...prevState, [dataName]: newDataNameObj}
		});
	}

	/**
	 * Check if the enum attributes for the selected column have already been collected and set in state.
	 * If the state has not yet been set return an empty string. Otherwise return all option attributes.
	 * @return {JSX.Element|string}
	 */
	const optionJSX = () => {
		if (enumAttributes.length === 0) {
			return '';
		}
		// todo: [Sven Gerlach] allow user to select and filter for multiple enum attributes at a time
		else {
			return (
				<>
					<option value={''}></option>
					{enumAttributes.map((attribute, index) => {
						return <option key={index} value={attribute}>{attribute}</option>
					})}
				</>
			);
		}
	}

	/**
	 * JSX returns form element that is tailored to either string or enum data type columns
	 * @return {JSX.Element}
	 */
	const filterJSX = () => {
		switch (dataType) {
			case 'string':
				return (
					<Form.Control
						placeholder={'String'}
						name={'value'}
						value={whereFilter[dataName]['value']}
						onChange={e => handleFormValueChange(e)}
					/>
				);
			case 'enum':
				return (
					<Form.Control
						as={'select'}
						name={'value'}
						value={whereFilter[dataName]['value']}
						onChange={e => handleFormValueChange(e)}
					>
						{optionJSX()}
					</Form.Control>
				);
			default:
		}
	}

	return (
		<>
			{/* todo: [Sven Gerlach] styling */}
			{filterJSX()}
		</>
	);
}
