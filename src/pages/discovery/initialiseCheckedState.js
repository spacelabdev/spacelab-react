/**
 * This module initialises the checked state in the discovery module for all filter options
 */


import * as filterArrays from "./discoveryHelper";


/**
 * Return an object with key/val pairs whereby the key is the filter name and the value is false.
 * This object will initialise the checked state.
 */
export default function initialiseCheckedState() {
    const stateObject = {}

    for (let filterArray in filterArrays) {
        filterArray = filterArrays[filterArray]
        for (let filter in filterArray) {
            filter = filterArray[filter]
            stateObject[filter[0]] = false
        }
    }

    return stateObject
}
