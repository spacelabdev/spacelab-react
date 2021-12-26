import React from "react";
import DiscoveryRowDataFilter from "./rowFilters/discoveryRowDataFilter";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

/**
 * Render check box, column label, and column label tooltip
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function DiscoveryColumnFilterListItem(props) {
	const {
		filterColumn,
		selectedColumns,
		setSelectedColumns,
		whereFilter,
		setWhereFilter,
	} = props;
	const isFilterListItemChecked = selectedColumns[filterColumn.name];
	const checkbox_style = {width: "1.25rem", height: "1.25rem"};

	function handleCheckboxClick(e) {
		// if current state of checkbox is unchecked, create base state for where filter
		// this is necessary since the value of the controlled component must be declared before the initial render
		if (!selectedColumns[filterColumn.name]) {
			setWhereFilter(prevState => {
				switch (filterColumn.dataType) {
					case 'number':
					case 'date':
						return Object.assign(prevState, {
							[filterColumn.name]: {'operator': '<', 'value': '', 'dataType': filterColumn.dataType}
						});
					case 'string':
					case 'enum':
						return Object.assign(prevState, {
							[filterColumn.name]: {'value': '', 'dataType': filterColumn.dataType}
						});
					default:
				}
			});
		} else {
			// delete the state if the filter is removed
			setWhereFilter(prevState => {
				delete prevState[filterColumn.name]
				return prevState
			});
		}

		// set state of checked / unchecked checkbox
		setSelectedColumns(prevState => {
			return {...prevState, [filterColumn.name]: !prevState[filterColumn.name]}
		});
	}

	// add tooltips as an overlay when hovering over the column filters
	function ColumnLabelWithTooltip() {
		const renderTooltip = (props) => (
			<Tooltip id={'column-tooltip'} {...props}>
				{filterColumn.description}
			</Tooltip>
		);

		return (
			<OverlayTrigger
				trigger={['hover', 'focus', 'click']}
				delay={{show: 250, hide: 400}}
				overlay={renderTooltip}
				placement={'auto'}
			>
				<div className={'search-parameter-name'}>
					{filterColumn.label}
				</div>
			</OverlayTrigger>
		);
	}

	// display row filters for any checked column whereby row filters are subject to the column's data type
	const discoveryRowDataFilter = (
		<DiscoveryRowDataFilter
			dataType={filterColumn.dataType}
			dataName={filterColumn.name}
			whereFilter={whereFilter}
			setWhereFilter={setWhereFilter}
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
				<ColumnLabelWithTooltip/>
			</div>
			{/* todo: [Sven Gerlach] style appropriately */}
			{isFilterListItemChecked ? discoveryRowDataFilter : ""}
		</>
	);
}
