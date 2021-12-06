import React from "react";
import DiscoveryRowDataFilter from "./rowFilters/discoveryRowDataFilter";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

/**
 * Creates check box for planet system element
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function DiscoveryColumnFilterListItem(props) {
	const {
		filterColumn,
		checked,
		setChecked,
		numberFilter,
		setNumberFilter
	} = props;

	const isFilterListItemChecked = checked[filterColumn.name]

	const checkbox_style = {
		width: "1.25rem",
		height: "1.25rem"
	}

	function handleCheckboxClick(e) {
		// if current state of checkbox is unchecked, create base state for number filter
		// this is necessary since the value of the controlled component must be declared before the initial render
		if (!checked[filterColumn.name]) {
			console.log('checked')
			setNumberFilter(prevState => {
				return Object.assign(prevState, { [filterColumn.name]: { 'operator': '<', 'value': '' } })
			})
		}
		else {
			// delete the state if the filter is removed
			setNumberFilter(prevState => {
				delete prevState[filterColumn.name]
				return prevState
			})
		}

		// set state of checked / unchecked checkbox
		setChecked(prevState => {
			// const newState = { ...prevState }
			// newState[filterColumn.name] = !prevState[filterColumn.name]
			// return newState
			return { ...prevState, [filterColumn.name]: !prevState[filterColumn.name] }
		})
	}

	function ColumnLabelWithTooltip () {
		const renderTooltip = (props) => (
			<Tooltip id={'column-tooltip'} {...props}>
				{filterColumn.description}
			</Tooltip>
		)

		return (
			<OverlayTrigger
				trigger={['hover', 'focus', 'click']}
				delay={{ show: 250, hide: 400 }}
				overlay={renderTooltip}
				placement={'auto'}
			>
				<div className={'search-parameter-name'}>
					{filterColumn.label}
				</div>
			</OverlayTrigger>
		)
	}

	const discoveryRowDataFilter = (
		<DiscoveryRowDataFilter
			dataType={filterColumn.dataType}
			dataName={filterColumn.name}
			numberFilter={numberFilter}
			setNumberFilter={setNumberFilter}
		/>
	)

	return (
		<>
			<div className={"filter-item"}>
				{/*wrapping the input in a div protects the check box from squishing when text wraps*/}
				<div className={'discovery-checkbox-wrapper'}>
					<input
						type={'checkbox'}
						style={checkbox_style}
						className={'discovery-checkbox'}
						name={filterColumn.name}
						checked={isFilterListItemChecked}
						onChange={handleCheckboxClick}
					/>
				</div>
				<ColumnLabelWithTooltip />
			</div>
			{/* todo: [Sven Gerlach] style appropriately */}
			{isFilterListItemChecked ? discoveryRowDataFilter : ""}
		</>
	);
}
