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
		dataType: "number",
		description: 'Target identification number, as listed in the Kepler Input Catalog (KIC). The KIC was derived from a ground-based imaging survey of the Kepler field conducted prior to launch. The survey\'s purpose was to identify stars for the Kepler exoplanet survey by magnitude and color. The full catalog of 13 million sources can be searched at the MAST archive. The subset of 4 million targets found upon the Kepler CCDs can be searched via the Kepler Target Search form. The Kepler ID is unique to a target and there is only one Kepler ID per target.',
	},
	{
		name: 'kepoi_name',
		label: 'KOI Name',
		dataType: "string",
		description: 'A number used to identify and track a Kepler Object of Interest (KOI). A KOI is a target identified by the Kepler Project that displays at least one transit-like sequence within Kepler time-series photometry that appears to be of astrophysical origin and initially consistent with a planetary transit hypothesis. A KOI name has an integer and a decimal part of the format KNNNNN.DD. The integer part designates the target star; the two-digit decimal part identifies a unique transiting object associated with that star. It is not necessarily the planetary candidate listed in that order within a DV report, nor does it indicate the distance of the planet from the the host star relative to other planets in the system.',
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
		description: 'Kepler number name in the form "Kepler-N," plus a lower-case letter, identifying the planet. In general, these numbers are easier to remember than the corresponding KOI or KIC/KepID designations and are intended to clearly indicate a class of objects that have been confirmed or validated as planets—a step up from the planet candidate designation.',
	},
	{
		name: 'koi_disposition',
		label: 'Exoplanet Archive Disposition',
		dataType: 'enum',
		description: 'The category of this KOI from the Exoplanet Archive. Current values are CANDIDATE, FALSE POSITIVE, NOT DISPOSITIONED or CONFIRMED. All KOIs marked as CONFIRMED are also listed in the Exoplanet Archive Confirmed Planet table. Designations of CANDIDATE, FALSE POSITIVE, and NOT DISPOSITIONED are taken from the Disposition Using Kepler Data.',
	},
	{
		name: 'koi_vet_stat',
		label: 'Vetting Status',
		dataType: 'enum',
		description: 'The vetting status for this KOI delivery. Current possible states are ACTIVE and DONE. As vetting tests for the null hypothesis that a TCE is a planet are performed, the disposition of each KOI as either a planet candidate or false positive will be updated and, most importantly, may change over time. It is therefore critical that the scientific community not conduct sample completeness studies on KOI tables that remain ACTIVE. Active tables do, however, provide the latest information for community scientists interested in follow-up observations and disposition activities. After a period of activity, the classification of the KOI table will change from ACTIVE to DONE when all dispositions are judged as final and all model parameters have been updated appropriately. This will typically occur after a new delivery of TCEs to the archive based on a longer data baseline.',
	},
	{
		name: 'koi_vet_date',
		label: 'Date of Last Parameter Update',
		dataType: 'date',
		description: 'Date of the last parameter update for this KOI.',
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
		description: 'The pipeline flag that designates the most probable physical explanation of the KOI. Typical values are FALSE POSITIVE, NOT DISPOSITIONED, and CANDIDATE. The value of this flag may change over time as the evaluation of KOIs proceeds to deeper levels of analysis using Kepler time-series pixel and light curve data, or follow-up observations. A not dispositioned value corresponds to objects for which the disposition tests have not yet been completed. A false positive has failed at least one of the tests described in Batalha et al. (2012). A planetary candidate has passed all prior tests conducted to identify false positives, although this does not a priori mean that all possible tests have been conducted. A future test may confirm this KOI as a false positive. False positives can occur when: 1) the KOI is in reality an eclipsing binary star, 2) the Kepler light curve is contaminated by a background eclipsing binary, 3) stellar variability is confused for coherent planetary transits, or 4) instrumental artifacts are confused for coherent planetary transits.',
	},
	{
		name: 'koi_score',
		label: 'Disposition Score',
		dataType: 'number',
		description: 'A value between 0 and 1 that indicates the confidence in the KOI disposition. For CANDIDATEs, a higher value indicates more confidence in its disposition, while for FALSE POSITIVEs, a higher value indicates less confidence in that disposition. The value is calculated from a Monte Carlo technique such that the score\'s value is equivalent to the frction of iterations where the Robovetter yields a disposition of CANDIDATE.',
	},
	{
		name: 'koi_fpflag_nt',
		label: 'Not Transit-Like Flag',
		dataType: 'number',
		description: 'A KOI whose light curve is not consistent with that of a transiting planet. This includes, but is not limited to, instrumental artifacts, non-eclipsing variable stars, and spurious (very low SNR) detections.',
	},
	{
		name: 'koi_fpflag_ss',
		label: 'Stellar Eclipse Flag',
		dataType: 'number',
		description: 'A KOI that is observed to have a significant secondary event, transit shape, or out-of-eclipse variability, which indicates that the transit-like event is most likely caused by an eclipsing binary. However, self-luminous, hot Jupiters with a visible secondary eclipse will also have this flag set, but with a disposition of PC.',
	},
	{
		name: 'koi_fpflag_co',
		label: 'Centroid Offset Flag',
		dataType: 'number',
		description: 'The source of the signal is from a nearby star, as inferred by measuring the centroid location of the image both in and out of transit, or by the strength of the transit signal in the target\'s outer (halo) pixels as compared to the transit signal from the pixels in the optimal (or core) aperture.',
	},
	{
		name: 'koi_fpflag_ec',
		label: 'Ephemeris Match Indicates Contamination Flag',
		dataType: 'number',
		description: 'The KOI shares the same period and epoch as another object and is judged to be the result of flux contamination in the aperture or electronic crosstalk.',
	},
	{
		name: 'koi_disp_prov',
		label: 'Disposition Provenance',
		dataType: 'string',
		description: ' Disposition Provenance',
	},
	{
		name: 'koi_comment',
		label: 'KOI Comment',
		dataType: 'string',
		description: ' \tA description of the reason why an object\'s disposition has been given as false positive. The following keywords are shorthand for certain criterion used to determine if a KOI is a false positive:\n' +
			'\n' +
			'    APO: "Active Pixel Offset" The pixels showing the transit do not coincide with the target star, indicating that the transit is actually on a background object.\n' +
			'    Binary: Indicates the transit event is due to an eclipsing binary, not a planet.\n' +
			'    EB: Target is an eclipsing binary, or there is an unresolved background binary.\n' +
			'    odd-even: The depth of the even-numbered transits are statistically different than the depths of the odd-numbered transits; this is a sign of a background eclipsing binary.\n' +
			'    V-shaped: Likely a grazing eclipsing binary.\n' +
			'    SB1: Target star is a single-lined spectroscopic binary.\n' +
			'    SB2: Target star is a double-lined spectroscopic binary.\n' +
			'\n' +
			'A comment field may also contain a list of the minor flags as set by the Robovetter. See the documents for the DR 25 and DR 24 Robovetter KOI Flags for detailed descriptions.',
	}
];

export const transitPropertiesFiltersArray = []

export const thresholdCrossingEventFiltersArray = []

export const stellarParametersFiltersArray = []

export const kicParametersFiltersArray = []

export const pixelBasedKoiVettingFiltersArray = []
