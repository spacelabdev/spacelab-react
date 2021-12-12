/**
 * Module makes Axios HTTP request to the CalTech end-point. The request signature consists of:
 * 	- base URL
 * 	- query strings: represent fragments of typical SQL SELECT statements in the form of key/values pairs
 *
 * Acceptable Keys
 * ---------------
 * 	1) table: choose table
 * 		&table=cumulative -> cumulative Kepler Objects of Interest table (KOI))
 * 	2) select: specify column names (case insensitive):
 * 		&select=* -> all available columns
 * 		$select=default -> default columns (smaller subset of all available columns)
 * 		&select=colA,colT,colZ -> returns only specified columns
 * 		$select=distinct colA -> returns set of possible enum attributes
 * 	3) count: return number of rows that fulfill query (see "where")
 * 		&select=count(*) -> returns number of rows in data table
 * 		&select:count(*)&where=koi_period>[x]
 * 	4) where: filter rows for col values
 * 		&where=validColName>value -> returns all rows where row value of validColName is greater than value
 * 		&where=kepler_name like 'Kepler-52 c' -> returns rows containing the specified string
 * 		&where=kepler_name is null -> use "is" if searching for null values
 * 		&where=koi_vet_date>to_date('2013-02-10','yyyy-mm-dd') -> filter rows with dates after 2013-02-10
 * 		&where=discoverymethod like 'Microlensing' and st_nts > 0 -> use "and" for joined filters
 * 	5) order: controls order in which rows are returned
 * 		&order=colA,colB -> ascending order with "colA" as primary filter and "colB" as secondary filter
 * 		&order=colA desc -> descending order
 * 	6) ra, dec: filter table for objects inside cone search, as specified by Right Ascension (ra_, Declination (dec),
 * 	and radius (radius or rad). Units must be appended to the radius specification.
 * 		&ra=291&dec48&rad=1 degree
 * 	7) format: csv, bar/pipe, ipac/ascii, xml, json
 *
 * Source: https://exoplanetarchive.ipac.caltech.edu/docs/program_interfaces.html
 */


import axios from "axios";

const api = axios.create({
	baseURL: 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI'
});

/**
 * Return either an empty string if no checkboxes are checked or return a query string with all comma seperated column
 * names checked in the filter UI
 * @param select
 * @return {string}
 */
function getSelectQueryString(select) {
	// set prefix query string with distinct which makes sure that only selected columns are returned
	let queryString = ""
	// counter for checked checkboxes
	let checkedCounter = 0

	Object.entries(select).forEach(([columnName, checked]) =>  {
		if (checked) {
			// append column name, with a pre-pended comma if the checkedCounter is greater than zero
			checkedCounter === 0
				? queryString += `${columnName}`
				: queryString += `,${columnName}`
			// increase checkedCounter by 1
			checkedCounter += 1
		}
	})

	// if no checkboxes checked return empty query string otherwise return queryString
	return queryString
}

/**
 * Return the appropriate where filter query string, subject to the four different data types
 * @param where
 * @return {string}
 */
function getWhereQueryString(where) {
	let queryString = ''

	// iterate over all column names and add their operators and values to the query string
	// collect all own properties of object
	const propertyKeys = Object.keys(where)

	// filter keys for those that have a value other than an empty string
	const propertyKeysWithValue = propertyKeys.filter(columnName => where[columnName].value !== '')

	// iterate over all keys with a valid value and append to query string
	propertyKeysWithValue.forEach((columnName, index) => {
		const value = where[columnName].value
		const dataType = where[columnName].dataType
		let operator

		// add " and " string if at least one more filter criteria is added
		if (index > 0) {
			queryString += ' and '
		}

		// add string subject to data type
		switch (dataType) {
			case 'number':
				operator = where[columnName].operator
				queryString += `${columnName}${operator}${value}`
				break
			// enum and string have the same filter syntax which is why the enum case is allowed to fall-through to the
			// string case
			case 'enum':
			case 'string':
				queryString += `${columnName} like '${value}'`
				break
			case 'date':
				operator = where[columnName].operator
				queryString += `${columnName}${operator}to_date('${value}','yyyy-mm-dd')`
				break
			default:
		}
	})

	return queryString
}

/**
 * Populate params in compliance with API SQL query restrictions
 * @param table
 * @param select
 * @param where
 * @param order
 * @param format
 * @return {Promise<AxiosResponse<any>|*>}
 */
export const getExoplanets = async (
	{
		table = "cumulative",
		select = "",
		where = "",
		order = "",
		format = "json"
	}) => {

	const selectQueryString = getSelectQueryString(select)
	const whereQueryString = getWhereQueryString(where)

	const params = {
		table: table,
		select: selectQueryString,
		where: whereQueryString,
		order: order,
		format: format
	}

	try {
		return await api.get('', { params });
	} catch (error) {
		return error;
	}
};
