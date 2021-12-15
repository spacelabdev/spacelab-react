/**
 * This module initialises the checked state in the discovery module for all filter options
 */
import * as filterArrays from "./discoveryHelper";

/**
 * Return an object with key/val pairs whereby the key is the filter name and the value is false.
 * This object will initialise the checked state for the checkboxes.
 */
export function initialiseSelectedColumnsState() {
	const stateObject = {};

	for (let filterArray in filterArrays) {
		filterArray = filterArrays[filterArray];
		for (let filter in filterArray) {
			filter = filterArray[filter];
			stateObject[filter.name] = filter.default
		}
	}

	return stateObject;
}

export function initialiseWhereFilterState() {
	const stateObject = {};

	for (let filterArray in filterArrays) {
		filterArray = filterArrays[filterArray];
		for (let filter in filterArray) {
			filter = filterArray[filter];
			if (filter.default) {
				switch (filter.dataType) {
					case 'number':
					case 'date':
						stateObject[filter.name] = {'operator': '<', 'value': '', 'dataType': filter.dataType};
						break;
					case 'string':
					case 'enum':
						stateObject[filter.name] = {'value': '', 'dataType': filter.dataType};
						break;
					default:
				}
			}
		}
	}

	return stateObject;
}
