/**
 * This module initialises the checked state in the discovery module for all filter options
 */
import * as filterArrays from "./discoveryHelper";

/**
 * Return an object with key/val pairs whereby the key is the filter name and the value is false.
 * This object will initialise the checked state for the checkboxes.
 */
export function initialiseSelectedColumnsState() {
	let stateObject = {};

	// if selectedColumns object stored in session data use this, else use filterArrays from discoveryHelper module
	if (sessionStorage.getItem("selectedColumns")) {
		const selectedColumnsJSON = sessionStorage.getItem("selectedColumns")
		stateObject = JSON.parse(selectedColumnsJSON)
	}
	else {
		for (let filterArray in filterArrays) {
			filterArray = filterArrays[filterArray];
			for (let filter in filterArray) {
				filter = filterArray[filter];
				stateObject[filter.name] = filter.default
			}
		}
	}

	return stateObject;
}

export function initialiseWhereFilterState() {
	let stateObject = {};

	// use session data if whereFilter key stored in session storage, else use filterArrays from discoveryHelper module
	if (sessionStorage.getItem("whereFilter")) {
		const whereFilterJSON = sessionStorage.getItem("whereFilter")
		stateObject = JSON.parse(whereFilterJSON)
	}
	else {
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
	}

	return stateObject;
}
