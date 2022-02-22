/**
 * Module for all filter arrays. Each filter array represents a sub-section of the columns available in the cumulative
 * CalTech dataset. Filter arrays and their elements are mutually exclusive and non-overlapping.
 *
 * The filter arrays contain an object for each database column. The object describes the name of the data column, the
 * label (display name for users), unit (if data type is number), default column displayed (boolean), the dataType,
 * and a detailed description. The latter is not the data type the database returns but rather the data type the data can
 * be coerced to. This is important for the SQL "where" part of the query string submitted to the API. Essentially, a
 * data column can contain 4 types of different data which beckon different filter methods:
 * 	1) string data (e.g. names): filter with a text input field
 * 	2) number data (e.g. ID or coordinates): filter with >, <, = and number input field
 * 	3) enum data (e.g. type, classifications, etc): filter with enum drop-down box
 * 	4) date data: filter with <, >, = date input field
 *
 * Source: https://exoplanetarchive.ipac.caltech.edu/docs/API_kepcandidate_columns.html
 */

export const identificationFiltersArray = [
	{
		name: 'kepid',
		label: 'Kepler Identification',
		unit: '',
		default: true,
		dataType: "number",
		description: 'Target identification number, as listed in the Kepler Input Catalog (KIC). The KIC was derived ' +
			'from a ground-based imaging survey of the Kepler field conducted prior to launch. The survey\'s purpose ' +
			'was to identify stars for the Kepler exoplanet survey by magnitude and color. The full catalog of 13 ' +
			'million sources can be searched at the MAST archive. The subset of 4 million targets found upon the ' +
			'Kepler CCDs can be searched via the Kepler Target Search form. The Kepler ID is unique to a target and ' +
			'there is only one Kepler ID per target.',
	},
	{
		name: 'kepoi_name',
		label: 'KOI Name',
		unit: '',
		default: true,
		dataType: "string",
		description: 'A number used to identify and track a Kepler Object of Interest (KOI). A KOI is a target ' +
			'identified by the Kepler Project that displays at least one transit-like sequence within Kepler ' +
			'time-series photometry that appears to be of astrophysical origin and initially consistent with a ' +
			'planetary transit hypothesis. A KOI name has an integer and a decimal part of the format KNNNNN.DD. The ' +
			'integer part designates the target star; the two-digit decimal part identifies a unique transiting ' +
			'object associated with that star. It is not necessarily the planetary candidate listed in that order ' +
			'within a DV report, nor does it indicate the distance of the planet from the the host star relative to ' +
			'other planets in the system.',
	}
];

export const exoplanetArchiveFiltersArray = [
	{
		name: 'kepler_name',
		label: 'Kepler Name',
		unit: '',
		default: true,
		dataType: 'string',
		description: 'Kepler number name in the form "Kepler-N," plus a lower-case letter, identifying the planet. ' +
			'In general, these numbers are easier to remember than the corresponding KOI or KIC/KepID designations ' +
			'and are intended to clearly indicate a class of objects that have been confirmed or validated as ' +
			'planets—a step up from the planet candidate designation.',
	},
	{
		name: 'koi_disposition',
		label: 'Exoplanet Archive Disposition',
		unit: '',
		default: true,
		dataType: 'enum',
		description: 'The category of this KOI from the Exoplanet Archive. Current values are CANDIDATE, ' +
			'FALSE POSITIVE, NOT DISPOSITIONED or CONFIRMED. All KOIs marked as CONFIRMED are also listed in the ' +
			'Exoplanet Archive Confirmed Planet table. Designations of CANDIDATE, FALSE POSITIVE, and ' +
			'NOT DISPOSITIONED are taken from the Disposition Using Kepler Data.',
	},
	{
		name: 'koi_vet_stat',
		label: 'Vetting Status',
		unit: '',
		default: false,
		dataType: 'enum',
		description: 'The vetting status for this KOI delivery. Current possible states are ACTIVE and DONE. ' +
			'As vetting tests for the null hypothesis that a TCE is a planet are performed, the disposition of each ' +
			'KOI as either a planet candidate or false positive will be updated and, most importantly, may change ' +
			'over time. It is therefore critical that the scientific community not conduct sample completeness ' +
			'studies on KOI tables that remain ACTIVE. Active tables do, however, provide the latest information ' +
			'for community scientists interested in follow-up observations and disposition activities. After a ' +
			'period of activity, the classification of the KOI table will change from ACTIVE to DONE when all ' +
			'dispositions are judged as final and all model parameters have been updated appropriately. This will ' +
			'typically occur after a new delivery of TCEs to the archive based on a longer data baseline.',
	},
	{
		name: 'koi_vet_date',
		label: 'Date of Last Parameter Update',
		unit: '',
		default: false,
		dataType: 'date',
		description: 'Date of the last parameter update for this KOI.',
	}
];

export const projectDispositionFiltersArray = [
	{
		name: 'koi_pdisposition',
		label: 'Disposition using Kepler Data',
		unit: '',
		default: true,
		dataType: "enum",
		description: 'The pipeline flag that designates the most probable physical explanation of the KOI. Typical ' +
			'values are FALSE POSITIVE, NOT DISPOSITIONED, and CANDIDATE. The value of this flag may change over ' +
			'time as the evaluation of KOIs proceeds to deeper levels of analysis using Kepler time-series pixel ' +
			'and light curve data, or follow-up observations. A not dispositioned value corresponds to objects for ' +
			'which the disposition tests have not yet been completed. A false positive has failed at least one of ' +
			'the tests described in Batalha et al. (2012). A planetary candidate has passed all prior tests ' +
			'conducted to identify false positives, although this does not a priori mean that all possible tests ' +
			'have been conducted. A future test may confirm this KOI as a false positive. False positives can ' +
			'occur when: 1) the KOI is in reality an eclipsing binary star, 2) the Kepler light curve is ' +
			'contaminated by a background eclipsing binary, 3) stellar variability is confused for coherent ' +
			'planetary transits, or 4) instrumental artifacts are confused for coherent planetary transits.',
	},
	{
		name: 'koi_score',
		label: 'Disposition Score',
		unit: '',
		default: true,
		dataType: 'number',
		description: 'A value between 0 and 1 that indicates the confidence in the KOI disposition. For CANDIDATEs, ' +
			'a higher value indicates more confidence in its disposition, while for FALSE POSITIVEs, a higher value ' +
			'indicates less confidence in that disposition. The value is calculated from a Monte Carlo technique ' +
			'such that the score\'s value is equivalent to the frction of iterations where the Robovetter yields a ' +
			'disposition of CANDIDATE.',
	},
	{
		name: 'koi_fpflag_nt',
		label: 'Not Transit-Like Flag',
		unit: '',
		default: true,
		dataType: 'number',
		description: 'A KOI whose light curve is not consistent with that of a transiting planet. This includes, ' +
			'but is not limited to, instrumental artifacts, non-eclipsing variable stars, ' +
			'and spurious (very low SNR) detections.',
	},
	{
		name: 'koi_fpflag_ss',
		label: 'Stellar Eclipse Flag',
		unit: '',
		default: true,
		dataType: 'number',
		description: 'A KOI that is observed to have a significant secondary event, transit shape, or ' +
			'out-of-eclipse variability, which indicates that the transit-like event is most likely caused by an ' +
			'eclipsing binary. However, self-luminous, hot Jupiters with a visible secondary eclipse will also ' +
			'have this flag set, but with a disposition of PC.',
	},
	{
		name: 'koi_fpflag_co',
		label: 'Centroid Offset Flag',
		unit: '',
		default: true,
		dataType: 'number',
		description: 'The source of the signal is from a nearby star, as inferred by measuring the centroid location ' +
			'of the image both in and out of transit, or by the strength of the transit signal in the target\'s ' +
			'outer (halo) pixels as compared to the transit signal from the pixels in the optimal (or core) aperture.',
	},
	{
		name: 'koi_fpflag_ec',
		label: 'Ephemeris Match Flag',
		unit: '',
		default: true,
		dataType: 'number',
		description: 'The KOI shares the same period and epoch as another object and is judged to be the result of ' +
			'flux contamination in the aperture or electronic crosstalk.',
	},
	{
		name: 'koi_disp_prov',
		label: 'Disposition Provenance',
		unit: '',
		default: false,
		dataType: 'string',
		description: ' Disposition Provenance',
	},
	{
		name: 'koi_comment',
		label: 'KOI Comment',
		unit: '',
		default: false,
		dataType: 'string',
		description: ' \tA description of the reason why an object\'s disposition has been given as false positive. ' +
			'The following keywords are shorthand for certain criterion used to determine if a KOI is a false positive:\n' +
			'\n' +
			'    APO: "Active Pixel Offset" The pixels showing the transit do not coincide with the target star, ' +
			'indicating that the transit is actually on a background object.\n' +
			'    Binary: Indicates the transit event is due to an eclipsing binary, not a planet.\n' +
			'    EB: Target is an eclipsing binary, or there is an unresolved background binary.\n' +
			'    odd-even: The depth of the even-numbered transits are statistically different than the depths of ' +
			'the odd-numbered transits; this is a sign of a background eclipsing binary.\n' +
			'    V-shaped: Likely a grazing eclipsing binary.\n' +
			'    SB1: Target star is a single-lined spectroscopic binary.\n' +
			'    SB2: Target star is a double-lined spectroscopic binary.\n' +
			'\n' +
			'A comment field may also contain a list of the minor flags as set by the Robovetter. See the documents ' +
			'for the DR 25 and DR 24 Robovetter KOI Flags for detailed descriptions.',
	}
];

export const transitPropertiesFiltersArray = [
	{
		name: 'koi_period',
		label: 'Orbital Period',
		unit: 'days',
		default: true,
		dataType: 'number',
		description: 'The interval between consecutive planetary transits.',
	},
	{
		name: 'koi_time0bk',
		label: 'Transit Epoch',
		unit: 'Barycentric Julian Day - 2,454,833',
		default: true,
		dataType: 'number',
		description: 'The time corresponding to the center of the first detected transit in Barycentric Julian Day ' +
			'(BJD) minus a constant offset of 2,454,833.0 days. The offset corresponds to 12:00 on Jan 1, 2009 UTC.',
	},
	{
		name: 'koi_time0',
		label: 'Transit Epoch',
		unit: 'Barycentric Julian Day',
		default: false,
		dataType: 'string',
		description: 'The time corresponding to the center of the first detected transit in Barycentric Julian Day (BJD).',
	},
	{
		name: 'koi_eccen',
		label: 'Eccentricity',
		unit: '',
		default: false,
		dataType: 'number',
		description: 'Eccentricity Value',
	},
	{
		name: 'koi_longp',
		label: 'Long. of Periastron',
		unit: 'deg',
		default: false,
		dataType: 'number',
		description: 'Longitude of Periastron',
	},
	{
		name: 'koi_impact',
		label: 'Impact Parameter',
		unit: '',
		default: true,
		dataType: 'number',
		description: 'The sky-projected distance between the center of the stellar disc and the center of the ' +
			'planet disc at conjunction, normalized by the stellar radius.',
	},
	{
		name: 'koi_duration',
		label: 'Transit Duration',
		unit: 'hours',
		default: true,
		dataType: 'number',
		description: 'The duration of the observed transits. Duration is measured from first contact between the ' +
			'planet and star until last contact. Contact times are typically computed from a best-fit model ' +
			'produced by a Mandel-Agol (2002) model fit to a multi-quarter Kepler light curve, assuming a ' +
			'linear orbital ephemeris.',
	},
	{
		name: 'koi_ingress',
		label: 'Ingress Duration',
		unit: 'hours',
		default: true,
		dataType: 'number',
		description: 'The time between first and second contact of the planetary transit. Contact times are ' +
			'typically computed from a best-fit model produced by a Mandel-Agol (2002) model fit to a multi-quarter ' +
			'Kepler light curve, assuming a linear orbital ephemeris.',
	},
	{
		name: 'koi_depth',
		label: 'Transit Depth',
		unit: 'parts per million',
		default: true,
		dataType: 'number',
		description: 'The fraction of stellar flux lost at the minimum of the planetary transit. Transit depths ' +
			'are typically computed from a best-fit model produced by a Mandel-Agol (2002) model fit to a ' +
			'multi-quarter Kepler light curve, assuming a linear orbital ephemeris.',
	},
	{
		name: 'koi_ror',
		label: 'Planet-Star Radius Ratio',
		unit: '',
		default: false,
		dataType: 'number',
		description: 'The planet radius divided by the stellar radius.',
	},
	{
		name: 'koi_srho',
		label: 'Fitted Stellar Density',
		unit: 'g/cm^3',
		default: false,
		dataType: 'number',
		description: 'Fitted stellar density is a direct observable from the light curve that, in the small-planet ' +
			'approximation, depends only on the transit\'s period, depth, and duration ' +
			'(see Seager and Mallen-Ornelas 2003). This quantity is directly fitted in the LS and MCMC methods, ' +
			'and is completely independent from the listed stellar mass and radius, which are derived using ' +
			'ground-based photometry, spectroscopy, and other observations.',
	},
	{
		name: 'koi_fittype',
		label: 'Planetary Fit Type',
		unit: '',
		default: false,
		dataType: 'enum',
		description: 'Type of Fit for planetary parameters. Options are:\n' +
			'LS (Least Squares fit)\n' +
			'MCMC (Markov Chain Monte Carlo fit)\n' +
			'DV (Data Validation pipeline fit)\n' +
			'none (fit is not provided, only orbital period, transit epoch and transit duration are reported)\n' +
			'LS+MCMC (Least Squares Fit with Markov Monte Carlo error bars)',
	},
	{
		name: 'koi_prad',
		label: 'Planetary Radius',
		unit: 'Earth radii',
		default: true,
		dataType: 'number',
		description: 'The radius of the planet. Planetary radius is the product of the planet star radius ratio and ' +
			'the stellar radius.',
	},
	{
		name: 'koi_sma',
		label: 'Orbit Semi-Major Axis',
		unit: 'Astronomical Unit',
		default: false,
		dataType: 'number',
		description: 'Half of the long axis of the ellipse defining a planet\'s orbit. For a circular orbit this ' +
			'is the planet-star separation radius. The semi-major axis is derived based on Kepler\'s third law, ' +
			'i.e., utilizing the orbital period and stellar mass, not scaling the planet-star separation ' +
			'by the stellar radius.',
	},
	{
		name: 'koi_incl',
		label: 'Inclination',
		unit: 'deg',
		default: false,
		dataType: 'number',
		description: 'The angle between the plane of the sky (perpendicular to the line of sight) and the orbital ' +
			'plane of the planet candidate.',
	},
	{
		name: 'koi_teq',
		label: 'Equilibrium Temperature',
		unit: 'Kelvin',
		default: true,
		dataType: 'number',
		description: 'Approximation for the temperature of the planet. ' +
			'The calculation of equilibrium temperature assumes ' +
			'a) thermodynamic equilibrium between the incident stellar flux and the radiated heat from the planet, ' +
			'b) a Bond albedo (the fraction of total power incident upon the planet scattered back into space) of 0.3, ' +
			'c) the planet and star are blackbodies, and ' +
			'd) the heat is evenly distributed between the day and night sides of the planet.',
	},
	{
		name: 'koi_insol',
		label: 'Insolation Flux',
		unit: ' Earth flux',
		default: true,
		dataType: 'number',
		description: 'Insolation flux is another way to give the equilibrium temperature. It depends on the stellar ' +
			'parameters (specifically the stellar radius and temperature), and on the semi-major axis of the ' +
			'planet. It\'s given in units relative to those measured for the Earth from the Sun.',
	},
	{
		name: 'koi_dor',
		label: 'Planet-Star Distance over Star Radius',
		unit: '',
		default: false,
		dataType: 'number',
		description: 'The distance between the planet and the star at mid-transit divided by the stellar radius. ' +
			'For the case of zero orbital eccentricity, the distance at mid-transit is the semi-major axis of the ' +
			'planetary orbit.',
	},
	{
		name: 'koi_limbdark_mod',
		label: 'Limb Darkening Model Name',
		unit: '',
		default: false,
		dataType: 'string',
		description: 'A reference to the limb-darkening model used to calculate stellar limb-darkening coefficients.',
	},
	{
		name: 'koi_ldm_coeff1',
		label: 'Limb Darkening Coefficient (1)',
		unit: '',
		default: false,
		dataType: 'number',
		description: 'Up to four coefficients (a1, a2, a3, a4) that define stellar limb darkening (e.g., Claret 2000). ' +
			'Limb darkening is the variation of specific intensity of the star as a function of μ = cos(θ). ' +
			'θ is the angle between the line-of-sight of an observer and a line perpendicular to the stellar ' +
			'surface at an observed point. Coefficients are dependent upon stellar temperature, surface gravity ' +
			'and metallicity. Adopted coefficients are required input for Mandel-Agol (2002) fits and are extracted ' +
			'from archived tables (e.g., Claret and Bloemen 2011). Limb-darkening coefficients remain fixed during ' +
			'fit minimization. Note that the dependence of limb-darkening coefficients on stellar parameters implies ' +
			'that planet radius does not scale linearly with stellar radius. If new stellar parameters are adopted, ' +
			'the most-correct approach is to re-fit the transit with new limb-darkening coefficients in order to ' +
			're-measure planet size.',
	},
	{
		name: 'koi_ldm_coeff2',
		label: 'Limb Darkening Coefficient (2)',
		unit: '',
		default: false,
		dataType: 'number',
		description: 'Up to four coefficients (a1, a2, a3, a4) that define stellar limb darkening (e.g., Claret 2000). ' +
			'Limb darkening is the variation of specific intensity of the star as a function of μ = cos(θ). ' +
			'θ is the angle between the line-of-sight of an observer and a line perpendicular to the stellar ' +
			'surface at an observed point. Coefficients are dependent upon stellar temperature, surface gravity ' +
			'and metallicity. Adopted coefficients are required input for Mandel-Agol (2002) fits and are extracted ' +
			'from archived tables (e.g., Claret and Bloemen 2011). Limb-darkening coefficients remain fixed during ' +
			'fit minimization. Note that the dependence of limb-darkening coefficients on stellar parameters implies ' +
			'that planet radius does not scale linearly with stellar radius. If new stellar parameters are adopted, ' +
			'the most-correct approach is to re-fit the transit with new limb-darkening coefficients in order to ' +
			're-measure planet size.',
	},
	{
		name: 'koi_ldm_coeff3',
		label: 'Limb Darkening Coefficient (3)',
		unit: '',
		default: false,
		dataType: 'number',
		description: 'Up to four coefficients (a1, a2, a3, a4) that define stellar limb darkening (e.g., Claret 2000). ' +
			'Limb darkening is the variation of specific intensity of the star as a function of μ = cos(θ). ' +
			'θ is the angle between the line-of-sight of an observer and a line perpendicular to the stellar ' +
			'surface at an observed point. Coefficients are dependent upon stellar temperature, surface gravity ' +
			'and metallicity. Adopted coefficients are required input for Mandel-Agol (2002) fits and are extracted ' +
			'from archived tables (e.g., Claret and Bloemen 2011). Limb-darkening coefficients remain fixed during ' +
			'fit minimization. Note that the dependence of limb-darkening coefficients on stellar parameters implies ' +
			'that planet radius does not scale linearly with stellar radius. If new stellar parameters are adopted, ' +
			'the most-correct approach is to re-fit the transit with new limb-darkening coefficients in order to ' +
			're-measure planet size.',
	},
	{
		name: 'koi_ldm_coeff4',
		label: 'Limb Darkening Coefficient (4)',
		unit: '',
		default: false,
		dataType: 'number',
		description: 'Up to four coefficients (a1, a2, a3, a4) that define stellar limb darkening (e.g., Claret 2000). ' +
			'Limb darkening is the variation of specific intensity of the star as a function of μ = cos(θ). ' +
			'θ is the angle between the line-of-sight of an observer and a line perpendicular to the stellar ' +
			'surface at an observed point. Coefficients are dependent upon stellar temperature, surface gravity ' +
			'and metallicity. Adopted coefficients are required input for Mandel-Agol (2002) fits and are extracted ' +
			'from archived tables (e.g., Claret and Bloemen 2011). Limb-darkening coefficients remain fixed during ' +
			'fit minimization. Note that the dependence of limb-darkening coefficients on stellar parameters implies ' +
			'that planet radius does not scale linearly with stellar radius. If new stellar parameters are adopted, ' +
			'the most-correct approach is to re-fit the transit with new limb-darkening coefficients in order to ' +
			're-measure planet size.',
	},
	{
		name: 'koi_parm_prov',
		label: 'KOI Parameter Provenance',
		unit: '',
		default: false,
		dataType: 'string',
		description: 'KOI Parameter Provenance',
	},
];

export const thresholdCrossingEventFiltersArray = [
	{
		name: 'koi_max_sngle_ev',
		label: 'Maximum Single Event Statistic',
		unit: '',
		default: false,
		dataType: 'number',
		description: 'The maximum calculated value of the SES. Maximum SES statistics for different TCEs from the ' +
			'same target differ because the most significant TCE is removed from the time series before repeating ' +
			'the test for further, weaker transit signals.',
	},
	{
		name: 'koi_max_mult_ev',
		label: 'Maximum Multiple Event Statistic',
		unit: '',
		default: false,
		dataType: 'number',
		description: 'The maximum calculated value of the MES. TCEs that meet the maximum MES threshold criterion ' +
			'and other criteria listed in the TCE release notes are delivered to the Data Validation (DV) module of ' +
			'the Kepler data analysis pipeline for transit characterization and the calculation of statistics ' +
			'required for disposition. A TCE exceeding the maximum MES threshold are removed from the time-series ' +
			'data and the SES and MES statistics recalculated. If a second TCE exceeds the maximum MES threshold ' +
			'then it is also propagated through the DV module and the cycle is iterated until no more events exceed ' +
			'the criteria. Candidate multi-planet systems are thus found this way. Users of the TCE table can ' +
			'exploit the maximum MES statistic to help filter and sort samples of TCEs for the purposes of ' +
			'discerning the event quality, determining the likelihood of planet candidacy, or assessing the risks ' +
			'of observational follow-up.',
	},
	{
		name: 'koi_model_snr',
		label: 'Transit Signal-to-Noise',
		unit: '',
		default: true,
		dataType: 'number',
		description: 'Transit depth normalized by the mean uncertainty in the flux during the transits.',
	},
	{
		name: 'koi_count',
		label: 'Number of Planets',
		unit: '',
		default: false,
		dataType: 'number',
		description: 'Number of planet candidates identified in a system.',
	},
	{
		name: 'koi_num_transits',
		label: 'Number of Transits',
		unit: '',
		default: false,
		dataType: 'number',
		description: 'The number of expected transits or partially-observed transits associated with the planet ' +
			'candidate occurring within the searched light curve. This does not include that fall completely ' +
			'within data gaps.',
	},
	{
		name: 'koi_tce_plnt_num',
		label: 'TCE Planet Number',
		unit: '',
		default: true,
		dataType: 'enum',
		description: 'TCE Planet Number federated to the KOI.',
	},
	{
		name: 'koi_tce_delivname',
		label: 'TCE Delivery Name',
		unit: '',
		default: true,
		dataType: 'enum',
		description: 'TCE delivery name corresponding to the TCE data federated to the KOI.',
	},
	{
		name: 'koi_quarters',
		label: 'Quarters',
		unit: '',
		default: false,
		dataType: 'string',
		description: 'A bit string indicating which quarters of Kepler data were searched for transit signatures. ' +
			'Reading from left to right, the bits indicate the quarters, starting with quarter 1. A value of 1 for ' +
			'any bit means the designated quarter was searched for transits; a value of 0 means that quarter was ' +
			'not included in the transit search.',
	},
	{
		name: 'koi_trans_mod',
		label: 'Transit Model Name',
		unit: '',
		default: false,
		dataType: 'enum',
		description: 'A reference to the transit model used to fit the data.',
	},
	{
		name: 'koi_model_dof',
		label: 'Model Degrees of Freedom',
		unit: '',
		default: false,
		dataType: 'number',
		description: 'The number of degrees of freedom used when fitting the transit model to the data.',
	},
	{
		name: 'koi_model_chisq',
		label: 'Model Goodness of Fit',
		unit: 'chi-squared',
		default: false,
		dataType: 'number',
		description: 'The goodness of the transit fit to the data. Within the TCE table, this quantity is the χ2 ' +
			'statistic. Within the KOI table this quantity is the reduced-χ2 statistic, e.g., divided by the number ' +
			'of degrees of freedom in the fit.',
	},
	{
		name: 'koi_datalink_dvr',
		label: 'Link to DV Report',
		unit: '',
		default: false,
		dataType: 'string',
		description: 'This is the relative path for the data validation report.',
	},
	{
		name: 'koi_datalink_dvs',
		label: 'Link to DV Summary',
		unit: '',
		default: false,
		dataType: 'string',
		description: 'This is the relative path for the data validation summary.',
	},
];

export const stellarParametersFiltersArray = [
	{
		name: 'koi_steff',
		label: 'Stellar Effective Temperature',
		unit: 'Kelvin',
		default: true,
		dataType: 'number',
		description: 'The photospheric temperature of the star.',
	},
	{
		name: 'koi_slogg',
		label: 'Stellar Surface Gravity',
		unit: 'log10(cm s^-2)',
		default: true,
		dataType: 'number',
		description: 'The base-10 logarithm of the acceleration due to gravity at the surface of the star.',
	},
	{
		name: 'koi_smet',
		label: 'Stellar Metallicity',
		unit: '',
		default: false,
		dataType: 'number',
		description: 'The base-10 logarithm of the Fe to H ratio at the surface of the star, ' +
			'normalized by the solar Fe to H ratio',
	},
	{
		name: 'koi_srad',
		label: 'Stellar Radius',
		unit: 'solar radii',
		default: true,
		dataType: 'number',
		description: 'The photospheric radius of the star',
	},
	{
		name: 'koi_smass',
		label: 'Stellar Mass',
		unit: 'solar mass',
		default: false,
		dataType: 'number',
		description: 'The mass of the star',
	},
	{
		name: 'koi_sage',
		label: 'Stellar Age',
		unit: 'Giga years',
		default: false,
		dataType: 'number',
		description: 'The age of the star',
	},
	{
		name: 'koi_sparprov',
		label: 'Provenance of Stellar Parameters',
		unit: '',
		default: false,
		dataType: 'enum',
		description: 'A flag describing the source of the stellar parameters.\n' +
			'KIC = The parameters are extracted from the Kepler Input Catalog (Brown et al. 2011). ' +
			'Uncertainties of Teff = 200 K, log(g) = 0.3 dex and [Fe/H] = 0.4.\n' +
			'\n' +
			'J-K = The star is unclassified in the KIC, J-K has been used to estimate temperature. ' +
			'The host star is assumed to be on the ZAMS with corresponding log(g) based on the Schmidt-Kaler relation.\n' +
			'\n' +
			'Solar = The star is unclassified in the KIC, so the host star is assumed to have solar properties.\n' +
			'\n' +
			'SME = Spectroscopic parameters derived from SME analysis (Valenti and Piskunov 1996). ' +
			'Stellar parameters are derived based on stellar evolution models.\n' +
			'\n' +
			'SPC = Spectroscopic parameters derived from SPC analysis (Buchhave et al. 2012). ' +
			'Stellar parameters are derived based on stellar evolution models.\n' +
			'\n' +
			'Pinsonneault = Uses a revised Teff scale from Pinsonneault et al. (2012) with [Fe/H] fixed at -0.2. ' +
			'The quantity log(g) is taken from the KIC. ' +
			'Values are then revised by fitting to Yonsei-Yale stellar evolution models (Yi et al. 2001).\n' +
			'\n' +
			'Astero = Host star properties have been measured by comparison with astroseismologial models.',
	},
];

export const kicParametersFiltersArray = [
	{
		name: 'ra',
		label: 'RA',
		unit: 'deg',
		default: false,
		dataType: 'number',
		description: 'KIC Right Ascension',
	},
	{
		name: 'dec',
		label: 'Dec',
		unit: 'deg',
		default: true,
		dataType: 'number',
		description: 'KIC Declination',
	},
	{
		name: 'koi_kepmag',
		label: 'Kepler-band',
		unit: 'mag',
		default: true,
		dataType: 'number',
		description: 'Kepler-band',
	},
	{
		name: 'koi_gmag',
		label: 'KIC g\'-band mag',
		unit: 'mag',
		default: false,
		dataType: 'number',
		description: 'g\'-band mag from KIC',
	},
	{
		name: 'koi_rmag',
		label: 'KIC r\'-band mag',
		unit: 'mag',
		default: false,
		dataType: 'number',
		description: '\tr\'-band mag from KIC',
	},
	{
		name: 'koi_imag',
		label: 'KIC i\'-band mag',
		unit: 'mag',
		default: false,
		dataType: 'number',
		description: 'i\'-band mag from KIC',
	},
	{
		name: 'koi_zmag',
		label: 'KIC z\'-band mag',
		unit: 'mag',
		default: false,
		dataType: 'number',
		description: 'z\'-band mag from KIC',
	},
	{
		name: 'koi_jmag',
		label: 'KIC J-band mag',
		unit: 'mag',
		default: false,
		dataType: 'number',
		description: 'J-band mag from 2MASS',
	},
	{
		name: 'koi_hmag',
		label: 'KIC H-band mag',
		unit: 'mag',
		default: false,
		dataType: 'number',
		description: 'H-band mag from 2MASS',
	},
	{
		name: 'koi_kmag',
		label: 'KIC K-band mag',
		unit: 'mag',
		default: false,
		dataType: 'number',
		description: 'K-band mag from 2MASS',
	}
];

export const pixelBasedKoiVettingFiltersArray = [
	{
		name: 'koi_fwm_sra',
		label: 'FW Source α(OOT)',
		unit: 'hours',
		default: false,
		dataType: 'number',
		description: 'The Right Ascension (J2000) of the location of the transiting object calculated from the ' +
			'flux-weighted centroids. This result does not reflect the systematics due to crowding which can ' +
			'introduce significant errors in the calculated position.',
	},
	{
		name: 'koi_fwm_sdec',
		label: 'FW Source δ(OOT)',
		unit: 'degrees',
		default: false,
		dataType: 'number',
		description: 'The Declination (J2000) of the location of the transiting object calculated from the ' +
			'flux-weighted centroids. This result does not reflect the systematics due to crowding which can ' +
			'introduce significant errors in the calculated position.',
	},
	{
		name: 'koi_fwm_srao',
		label: 'FW Δα(OOT)',
		unit: 'seconds',
		default: false,
		dataType: 'number',
		description: 'The RA (J2000) flux-weighted centroid shift. This is the RA of the in-transit flux weighted ' +
			'centroid minus the RA of the out-of-transit flux weighted centroid.',
	},
	{
		name: 'koi_fwm_sdeco',
		label: 'FW Δδ(OOT)',
		unit: 'arcseconds',
		default: false,
		dataType: 'number',
		description: 'The Dec (J2000) flux-weighted centroid shift. This is the Dec of the in-transit flux ' +
			'weighted centroid minus the Dec of the out-of-transit flux weighted centroid.',
	},
	{
		name: 'koi_fwm_prao',
		label: 'FW Source Δα(OOT)',
		unit: 'seconds',
		default: false,
		dataType: 'number',
		description: 'The calculated Right Ascension offset of the transiting or eclipsing object from the KIC ' +
			'location of the target star. The accuracy of this calculation degrades when the transit source has ' +
			'significant flux that falls outside the photometric aperture + a halo of pixels around it.',
	},
	{
		name: 'koi_fwm_pdeco',
		label: 'FW Source Δδ(OOT)',
		unit: 'arcseconds',
		default: false,
		dataType: 'number',
		description: 'The calculated Declination offset of the transiting or eclipsing object from the KIC ' +
			'location of the target star. The accuracy of this calculation degrades when the transit source has ' +
			'significant flux that falls outside the photometric aperture + a halo of pixels around it.',
	},
	{
		name: 'koi_fwm_stat_sig',
		label: 'Flux-Weighted Offset Significance',
		unit: 'percent',
		default: false,
		dataType: 'number',
		description: 'Indicates whether there is a statistically significant flux-weighted offset between ' +
			'in-transit and out-of-transit images. 100% indicates there is no offset and there is confidence that ' +
			'the transit is on the target star. The accuracy of this calculation degrades when the transit source ' +
			'has significant flux that falls outside the photometric aperture + a halo of pixels around it.',
	},
	{
		name: 'koi_dicco_mra',
		label: 'PRF ΔαSQ(OOT)',
		unit: 'arcseconds',
		default: false,
		dataType: 'number',
		description: 'The angular offset in the RA (J2000) direction between the best-fit PRF centroids from ' +
			'the Out-Of-Transit image and the Difference Image by averaging the weighted single-quarter measurements. ' +
			'The out-of-transit centroids are subtracted from the difference image centroids.',
	},
	{
		name: 'koi_dicco_mdec',
		label: 'PRF ΔδSQ(OOT)',
		unit: 'arcseconds',
		default: false,
		dataType: 'number',
		description: 'The angular offset in the Dec (J2000) direction between the best-fit PRF centroids from ' +
			'the Out-Of-Transit image and the Difference Image by averaging the weighted single-quarter measurements. ' +
			'The out-of-transit centroids are subtracted from the difference image centroids.',
	},
	{
		name: 'koi_dicco_msky',
		label: 'PRF ΔαSQ(KIC)',
		unit: 'arcseconds',
		default: false,
		dataType: 'number',
		description: 'The angular offset in the RA (J2000) direction between the best-fit PRF centroids from the ' +
			'difference image and the Kepler Input Catalog position by averaging the weighted single-quarter ' +
			'measurements. The KIC position is subtracted from the difference image centroids.',
	},
	{
		name: 'koi_dikco_mra',
		label: 'PRF ΔαSQ(KIC)',
		unit: 'arcseconds',
		default: false,
		dataType: 'number',
		description: 'The angular offset in the RA (J2000) direction between the best-fit PRF centroids from ' +
			'the difference image and the Kepler Input Catalog position by averaging the weighted single-quarter ' +
			'measurements. The KIC position is subtracted from the difference image centroids.',
	},
	{
		name: 'koi_dikco_mdec',
		label: 'PRF ΔδSQ(KIC)',
		unit: 'arcseconds',
		default: false,
		dataType: 'number',
		description: 'The angular offset in the Dec (J2000) direction between the best-fit PRF centroids from the ' +
			'difference image and the Kepler Input Catalog position by averaging the weighted single-quarter ' +
			'measurements. The KIC position is subtracted from the difference image centroids.',
	},
	{
		name: 'koi_dikco_msky',
		label: 'PRF ΔθSQ(KIC)',
		unit: 'arcseconds',
		default: false,
		dataType: 'number',
		description: 'The angular offset in the plane of the sky between the best-fit PRF centroids from the ' +
			'difference image and the Kepler Input Catalog position by averaging the weighted single-quarter ' +
			'measurements. The KIC position is subtracted from the difference image centroids.',
	},
];
