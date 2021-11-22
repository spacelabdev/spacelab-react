/**
 * Module for all filter arrays. Each filter array represents a sub-section of the columns available in the cumulative
 * CalTech dataset. Filter arrays and their elements are mutually exclusive and non-overlapping.
 *
 * The filter arrays contain an object for each database column. The object describes the name of the data column, the
 * label, and the dataType. The latter is not the data type the database returns but rather the data type the data can
 * be coerced to. This is important for the SQL "where" part of the query string submitted to the API. Essentially, a
 * data column can contain 4 types of different data which beckon different filter methods:
 * 	1) string data (e.g. names): filter with a text input field
 * 	2) number data (e.g. ID or coordinates): filter with >, <, = and number input field
 * 	3) enum data (e.g. type, classifications, etc): filter with enum drop-down box
 * 	4) date data: filter with <, >, = date input field
 *
 * Source: https://exoplanetarchive.ipac.caltech.edu/docs/API_kepcandidate_columns.html
 */


/**
 * Array of filter options for filtering identifier columns
 * @type {[{name: string, label: string, dataType: string}]}
 */
export const identificationFiltersArray = [
	{
		name: 'kepid',
		label: 'Kepler Identification',
		dataType: "number"
	},
	{
		name: 'kepoi_name',
		label: 'KOI Name',
		dataType: "string"
	}
];

/**
 * Array of filter options for filtering exoplanet columns
 * @type {[{name: string, label: string, dataType: string}]}
 */
export const exoplanetArchiveFiltersArray = [
	{
		name: 'kepler_name',
		label: 'Kepler Name',
		dataType: 'string',
	},
	{
		name: 'koi_disposition',
		label: 'Exoplanet Archive Disposition',
		dataType: 'enum',
	},
	{
		name: 'koi_vet_stat',
		label: 'Vetting Status',
		dataType: 'enum',
	},
	{
		name: 'koi_vet_date',
		label: 'Date of Last Parameter Update',
		dataType: 'date',
	}
];

/**
 * Array of filter options for filtering project disposition columns
 * @type {[{name: string, label: string, dataType: string}]}
 */
export const projectDispositionFiltersArray = [
	{
		name: 'koi_pdisposition',
		label: 'Disposition using Kepler Data',
		dataType: "enum",
	},
	{
		name: 'koi_score',
		label: 'Disposition Score',
		dataType: 'number',
	},
	{
		name: 'koi_fpflag_nt',
		label: 'Not Transit-Like Flag',
		dataType: 'number',
	},
	{
		name: 'koi_fpflag_ss',
		label: 'Stellar Eclipse Flag',
		dataType: 'number',
	},
	{
		name: 'koi_fpflag_co',
		label: 'Centroid Offset Flag',
		dataType: 'number',
	},
	{
		name: 'koi_fpflag_ec',
		label: 'Ephemeris Match Indicates Contamination Flag',
		dataType: 'number',
	},
	{
		name: 'koi_disp_prov',
		label: 'Disposition Provenance',
		dataType: 'string'
	},
	{
		name: 'koi_comment',
		label: 'KOI Comment',
		dataType: 'string',
	}
];

export const transitPropertiesFiltersArray = []

export const thresholdCrossingEventFiltersArray = []

export const stellarParametersFiltersArray = []

export const kicParametersFiltersArray = []

export const pixelBasedKoiVettingFiltersArray = []
