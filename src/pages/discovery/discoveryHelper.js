/**
 * Module for all filter arrays. Each filter array represents a sub-section of the columns available in the cumulative
 * CalTech dataset. Filter arrays and their elements are mutually exclusive and non-overlapping.
 *
 * Source: https://exoplanetarchive.ipac.caltech.edu/docs/API_kepcandidate_columns.html
 */


/**
 * Array of filter options for filtering identifier columns
 * @type {string[][]}
 */
export const identificationFiltersArray = [
	[
		'kepid',
		'Kepler Identification'
	],
	[
		'kepoi_name',
		'KOI Name'
	],
];

/**
 * Array of filter options for filtering exoplanet columns
 * @type {string[][]}
 */
export const exoplanetArchiveFiltersArray = [
	[
		'kepler_name',
		'Kepler Name'
	],
	[
		'koi_disposition',
		'Exoplanet Archive Disposition'
	],
	[
		'koi_vet_stat',
		'Vetting Status'
	],
	[
		'koi_vet_date',
		'Date of Last Parameter Update'
	],
];

/**
 * Array of filter options for filtering project disposition columns
 * @type {string[][]}
 */
export const projectDispositionFiltersArray = [
	[
		'koi_disposition',
		'Disposition using Kepler Data'
	],
	[
		'koi_score',
		'Disposition Score'
	],
	[
		'koi_fpflag_nt',
		'Not Transit-Like Flag'
	],
	[
		'koi_fpflag_ss',
		'Stellar Eclipse Flag'
	],
	[
		'koi_fpflag_co',
		'Centroid Offset Flag'
	],
	[
		'koi_fpflag_ec',
		'Ephemeris Match Indicates Contamination Flag'
	],
	[
		'koi_disp_prov',
		'Disposition Provenance'
	],
	[
		'koi_comment',
		'KOI Comment'
	],
];

// todo: build out
export const transitPropertiesFiltersArray = []

// todo: build out
export const thresholdCrossingEventFiltersArray = []

// todo: build out
export const stellarParametersFiltersArray = []

// todo: build out
export const kicParametersFiltersArray = []

// todo: build out
export const pixelBasedKoiVettingFiltersArray = []
