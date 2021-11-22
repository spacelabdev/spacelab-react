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
 * 		&select=colA,colT,colZ -> adds columns to default output
 * 		&select=distinct colA,colT,colZ -> replace default columns
 * 	3) count: return number of rows that fulfill query (see "where")
 * 		&select=count(*) -> returns number of rows in data table
 * 		&select:count(*)&where=koi_period>[x]
 * 	4) where: filter rows for col values
 * 		&where=validColName>value -> returns all rows where row value of validColName is greater than value
 * 		&where=kepler_name like 'Kepler-52 c' -> returns rows containing the specified string
 * 		&where=kepler_name is null -> use "is" if searching for null values
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

export const getExoplanets = async (
	table='cumulative',
	select='*',
	where='koi_disposition like \'CANDIDATE\' and koi_period>300 and koi_prad<2',
	order='koi_period',
	format='json'
) => {

	const params = {
		table: table,
		select: select,
		where: where,
		order: order,
		format: format
	}


	try {
		return await api.get('', { params });
	} catch (error) {
		return error;
	}
};
