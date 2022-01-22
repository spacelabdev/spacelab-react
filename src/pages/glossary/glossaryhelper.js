/**
 * Returns glossary terms within specified alphabetic index range. Alphabet is NOT zero indexed. A=1 ... Z=26.
 * @param beginningAlphabeticIndex
 * @param endingAlphabeticIndex
 * @returns {*[]}
 */
export const returnFilteredTerms = (beginningAlphabeticIndex, endingAlphabeticIndex) => {
	const glossaryArray = [];
	for (let i = 0; i < glossaryTermsArray.length; i++) {
		if (glossaryTermsArray[i][2] >= beginningAlphabeticIndex && glossaryTermsArray[i][2] <= endingAlphabeticIndex) {
			glossaryArray.push(glossaryTermsArray[i]);
		}
	}
	return glossaryArray;
};

/**
 * Updates CSS for term images where an actual image is not present in the provided term array and thus the default
 * placeholder image is used.
 */
export const handleMissingTermImage = () => {
	const termImgs = document.querySelectorAll("#glossary-term-image");
	termImgs.forEach(termImg => {
		termImg.setAttribute('style', 'width: 300px; padding: 4.5em; background: white; border: 1px solid black;');
	});
};

/**
 * Updates CSS for term images where a unique image is present in the provided term array.
 */
export const handleTermImage = () => {
	const termImgs = document.querySelectorAll("#glossary-term-image");
	termImgs.forEach(termImg => {
		termImg.setAttribute('style', 'width: 600px; padding: 0; border: none;');
	});
};

/**
 * Updates the CSS color for the currently selected filter, and returns all other filters to black.
 * @param currentSelection
 */
export const highlightCurrentFilter = (currentSelection) => {
	const alphabetFilters = document.querySelectorAll(".glossary-filter-button");
	alphabetFilters.forEach(alphabetFilter => {
		alphabetFilter.id === currentSelection
			? alphabetFilter.setAttribute('style', 'color: #7000FF; border-bottom: 2px solid #7000FF;')
			: alphabetFilter.setAttribute('style', 'color: black; border-bottom: 2px solid black;');
	});
};

/**
 * Dictionary of Glossary terms organized by key value pairs where the key is the term and the value is the definition.
 * @type {{"Black Body": string, "Stellar Limb": string, "Stellar Variability": string,
 * "Hydrogen-Helium Envelope": string, Eccentricity: string, "Limb Darkening": string, "Secondary Eclipse": string,
 * "Log g [cgs]": string, "Relativistic Beaming": string, "Galactic Plane": string, "Eclipsing Binaries": string,
 * Transits: string, "Disintegrating Planets": string, "Tidal circularization": string, "Warm Jupiter": string,
 * "Transit timing variation": string, "Astrometric solution": string, "Effective Temperature": string,
 * "Scale Heights": string, "Mutual Inclinations": string, "Insolation Flux": string,
 * "Threshold Crossing Events (TCE)": string, "Hot Jupiter": string, "Main sequence star": string,
 * "Stellar Disk": string, "Gravitational Lensing": string, "Super-Earths": string, "Transit Depth": string,
 * "Orbital Inclination": string, "Transit Midpoint": string, Photoevaporation: string, "Three body resonance": string,
 * "G-dwarf Star": string}}
 */
export const glossaryTermsDictionary = {
	"Astrometric solution": "An astrometric solution is an optical technique used in astronomical imaging, "
		+ "where \"solving\" an image means finding a match between the imaged stars and a star catalogue. "
		+ "Sometimes when we look at an image of a star, we don’t know where in the sky the image came from. "
		+ "To get an astrometric solution, the positions of star(s) in an image are extracted and necessary angles "
		+ "and distances between objects are determined, such that the information can be compared to an existing "
		+ "catalog of information about the cosmos. If there is an astrometric solution, that means there is "
		+ "sufficient data to match a known star (or star system) in a catalog to the image being analyzed. "
		+ "Originally this process was done manually, where distances between stars in an image were carefully "
		+ "measured by hand and visually compared to physical image records. "
		+ "Now astrometric solving is done with programs and “solvers”. "
		+ "Therefore an astrometric solution is a model describing the astronomical position of each image pixel.",
	"Black Body": "A black body is an idealized body or object that absorbs all incident electromagnetic radiation "
		+ "at any frequency. It can also emit radiation in any frequency. "
		+ "You may already know that warm objects can be seen with infrared cameras. This is because warm objects "
		+ "are emitting electromagnetic waves in the infrared spectrum. All objects emit electromagnetic waves, "
		+ "and the kind of waves (frequency) emitted depend on the temperature of the object. A cold object will "
		+ "emit radiation with low energy (such as radio waves or microwaves), while a hot object will emit radiation "
		+ "with higher energy (like visible light). This may sound strange, but you actually know this phenomena "
		+ "quite well; you know that a poker left in the fireplace is very very hot when it starts to glow! "
		+ "The poker is emitting electromagnetic waves in the visible spectrum, which indicates that it is very hot "
		+ "and has a lot of energy. Blackbody radiation is the term used to describe the relationship between an "
		+ "object’s temperature and the wavelength of light that it emits. A “black body” is a model object that "
		+ "would theoretically absorb all wavelengths of light and would emit a spectrum of light in all wavelengths. "
		+ "Stars can be approximated as black bodies in many cases. The image below shows the radiation emission "
		+ "spectra of different colored stars. The temperature of the star determines the color. A star like our "
		+ "Sun has a temperature of around 6000 Kelvin or over 10,000 degrees Fahrenheit, and therefore the wavelength "
		+ "at which the Sun emits the most radiation is around the wavelength that our eyes would perceive as green! "
		+ "We don’t see the sun as green, however, because the sun also emits a lot of red and blue light. "
		+ "We perceive this combination as white light, since red, green, and blue light forms pure white light. "
		+ "One interesting thing this does explain though, is why the majority of plants are green. The color we see "
		+ "is the wavelength of light being reflected from the plant toward our eyes. Other wavelengths are absorbed "
		+ "by the plant. Wavelengths in the green spectrum are most abundant and would result in damage to the plant "
		+ "if they were absorbed instead of reflected. Too much energy at the peak of the Suns emission spectrum! "
		+ "To protect themselves plants reflect this wavelength and absorb the other less energetic wavelengths on "
		+ "either side of the peak.",
	"Disintegrating Planets": "A disintegrating planet is when a planet is losing dust and gas as it appears to "
		+ "(or actually does) disintegrate, which can result in the light from a star behind an orbiting planet "
		+ "becoming dimmed or blocked.",
	"Eccentricity": "The eccentricity of an exoplanet or orbiting object is a measure of how much the orbit of an "
		+ "orbiting body deviates from a circle. An eccentricity of 0 would be a perfectly circular orbit, an "
		+ "eccentricity of 1 is a parabolic orbit, anything in between is an elliptical orbit.",
	"Eclipsing Binaries": "An eclipsing binary star is one whose brightness varies because the two components pass in "
		+ "front of each other. One start is \"eclipsed\" by the other.",
	"Effective Temperature": "The effective temperature of a star is the temperature of a black body with the same "
		+ "luminosity per surface area as the star (defined by Stefan-Boltzmann Law). In essence, it's the surface "
		+ "temperature of a star if we assume the star to be a perfect black body.",
	"G-dwarf Star": "A G-dwarf star, otherwise known as a yellow dwarf, is a type of main sequence star.",
	"Galactic Plane": "The galactic plane is the plane through which the majority of a disk-shaped galaxy's mass lies, "
		+ "typically referring specifically to the Milky Way Galaxy. Directions perpendicular to galactic plane define "
		+ "the galactic poles.",
	"Gravitational Lensing": "Gravitational lensing is when light from a star located behind a black hole or other "
		+ "massive object is bent around the massive object, distorting the image of the star and allowing you to see "
		+ "it even though it exists behind another object in the sky. In some cases it can result in multiple images "
		+ "of the same object appearing in the region around a black hole.",
	"Hot Jupiter": "A hot jupiter is a class of giant exoplanets that resemble Jupiter and have very short orbital "
		+ "periods, meaning that they are orbiting much closer to their star. According to CalTech, orbital periods of "
		+ "Hot Jupiters are usually less than or equal to 10 days. They are easy to identify using transit methods "
		+ "because of their proximity to stars.",
	"Hydrogen-Helium Envelope": "A hydrogen/helium envelope is like the \"envelope\" of gases surrounding gas giants, "
		+ "and describes the pockets of gas surrounding certain types of exoplanets.",
	"Insolation Flux": "Insolation flux is the measure of the amount of solar radiation an exoplanet receives.",
	"Limb Darkening": "Limb darkening is the optical effect seen in stars where the outer edge of the star appears "
		+ "dimmer or darker, while the center of the star appears brighter. The darker outer edge is referred to as "
		+ "the stellar limb.",
	"Log g [cgs]": "Log g in units of [cgs] describes the surface gravity on an exoplanet, otherwise known as the "
		+ "acceleration due to gravity.",
	"Main sequence star": "A main sequence star is a star in the middle of its life cycle that is still fusing "
		+ "hydrogen to form helium, meaning it still has hydrogen reserves.",
	"Mutual Inclinations": "Orbital inclination is the tilt of an orbit around a celestial body with reference to a "
		+ "particular and arbitrarily chosen plane. Mutual inclination, therefore, is a measure of the inclinations "
		+ "of two orbiting bodies",
	"Orbital Inclination": "Orbital inclination is the tilt of an object's orbit around a celestial body, expressed as "
		+ "the angle between a reference plane and the axis of direction of the orbiting object, where the reference "
		+ "plane is an arbitrary choice.",
	"Photoevaporation": "Photoevaporation is the process in which radiation ionises gas and causes it to disperse away "
		+ "from the ionising source of the radiation.",
	"Relativistic Beaming": "In relativistic frames, relativistic beaming is when a light source is emitted in one "
		+ "frame of reference, but that frame of reference is moving relative to another, therefore shifting the "
		+ "appearance of the light. Occurs with bodies emitting light that are moving near the speed of light. "
		+ "Therefore, if a star were moving past you at near the speed of light, it's light would appear to become "
		+ "focused in the direction of motion, whereas if you were at rest relative to that star it's light would "
		+ "emit in all directions.",
	"Scale Heights": "Scale height refers to the distance over which a physical variable decreases by a factor of e. "
		+ "In terms of a galaxy, the scale height describes the height above the galactic disk/ galactic plane \"at "
		+ "which the density of a particular constituent of the disk has declined by e\".",
	"Secondary Eclipse": "A secondary eclipse is when a planet passes behind a star "
		+ "and the light from the planet is dimmed.",
	"Stellar Disk": "A stellar disk is the ring-shaped accumulation of matter that orbits around a star.",
	"Stellar Limb": "The stellar limb is the outer edge of a star, "
		+ "which appears darker due to the effect of limb darkening.",
	"Stellar Variability": "Stellar variability describes how stars change throughout their lifetimes, "
		+ "such as variations in brightness and size depending on their position in the sequence of star-lives.",
	"Super-Earths": "Super-Earths are exoplanets whose mass is higher than Earth's, but still significantly smaller "
		+ "than that of the ice giants.",
	"Three body resonance": "Orbital resonance is when orbiting bodies exert periodic gravitational influence on each "
		+ "other during orbits. Three-body resonance describes when orbital resonance occurs between three orbiting "
		+ "bodies (such as in the infamous three-body problem).",
	"Threshold Crossing Events (TCE)": "A TCE is a potentially periodic decrease in the brightness of a star that has "
		+ "been detected in a search for exoplanets using a light curve.",
	"Tidal circularization": "Tidal circularization is the process in which the orbit of an orbiting body gradually "
		+ "becomes more circular over time. It's an effect of the tidal forces between an orbiting body and the "
		+ "object that it orbits, where the eccentricity (measure of how much an orbit deviates from a circle) "
		+ "decreases over time.",
	"Transit Depth": "A transit is an object that passes in front of a star, such that the transit depth is the ratio "
		+ "of the surface area of the star's disk blocked out by the planet's disk. In other words, the ratio of "
		+ "the area of the planet to the area of the star, which can be used to calculate the size of the planet.",
	"Transit Midpoint": "The transit midpoint of a transiting object is the average of the time from when the "
		+ "exoplanet begins to cross the stellar limb to the time the candidate finishes crossing the stellar limb.",
	"Transit timing variation": "Transit timing variation is a method for detecting exoplanets by observing variations "
		+ "in the timing of a transit. It is based on the idea that when a planet crosses a star and gets tugged on by "
		+ "a second planet, it will speed up or slow down, and therefore won't cross the star when predicted. The "
		+ "difference in timing allows for the prediction of a second planet.",
	"Transits": "A transit is an object or exoplanet passing in front of a star and dimming its light.",
	"Warm Jupiter": "Warm Jupiters are a type of planet classified as being between Jupiter-like planets and Hot "
		+ "Jupiters, in which their orbital periods are between that of Jupiters (over 100 days) and "
		+ "Hot Jupiters (1 to 10 days).",
}

/**
 * Array of glossary term arrays. Each glossary term array consists of [term, definition, alphabetic index].
 * Ex: [Astronomy, study of the stars, 1] Alphabetic index is 1 since the term starts with 'A'. Index of 'B' is 2, ...,
 * and the index of 'Z' is 26.
 * @type {((string|number)[]|string)[]}
 */
export const glossaryTermsArray = [
	[
		"Astrometric solution",
		"An astrometric solution is an optical technique used in astronomical imaging, "
		+ "where \"solving\" an image means finding a match between the imaged stars and a star catalogue. "
		+ "Sometimes when we look at an image of a star, we don’t know where in the sky the image came from. "
		+ "To get an astrometric solution, the positions of star(s) in an image are extracted and necessary angles "
		+ "and distances between objects are determined, such that the information can be compared to an existing "
		+ "catalog of information about the cosmos. If there is an astrometric solution, that means there is "
		+ "sufficient data to match a known star (or star system) in a catalog to the image being analyzed. "
		+ "Originally this process was done manually, where distances between stars in an image were carefully "
		+ "measured by hand and visually compared to physical image records. "
		+ "Now astrometric solving is done with programs and “solvers”. "
		+ "Therefore an astrometric solution is a model describing the astronomical position of each image pixel.",
		1,
		"https://res.cloudinary.com/spacelabdev/image/upload/v1642872384/Glossary%20Images/astrometric_izqmwt.jpg"
	],
	[
		"Black Body",
		"A black body is an idealized body or object that absorbs all incident electromagnetic radiation "
		+ "at any frequency. It can also emit radiation in any frequency. "
		+ "You may already know that warm objects can be seen with infrared cameras. This is because warm objects "
		+ "are emitting electromagnetic waves in the infrared spectrum. All objects emit electromagnetic waves, "
		+ "and the kind of waves (frequency) emitted depend on the temperature of the object. A cold object will "
		+ "emit radiation with low energy (such as radio waves or microwaves), while a hot object will emit radiation "
		+ "with higher energy (like visible light). This may sound strange, but you actually know this phenomena "
		+ "quite well; you know that a poker left in the fireplace is very very hot when it starts to glow! "
		+ "The poker is emitting electromagnetic waves in the visible spectrum, which indicates that it is very hot "
		+ "and has a lot of energy. Blackbody radiation is the term used to describe the relationship between an "
		+ "object’s temperature and the wavelength of light that it emits. A “black body” is a model object that "
		+ "would theoretically absorb all wavelengths of light and would emit a spectrum of light in all wavelengths. "
		+ "Stars can be approximated as black bodies in many cases. The image below shows the radiation emission "
		+ "spectra of different colored stars. The temperature of the star determines the color. A star like our "
		+ "Sun has a temperature of around 6000 Kelvin or over 10,000 degrees Fahrenheit, and therefore the wavelength "
		+ "at which the Sun emits the most radiation is around the wavelength that our eyes would perceive as green! "
		+ "We don’t see the sun as green, however, because the sun also emits a lot of red and blue light. "
		+ "We perceive this combination as white light, since red, green, and blue light forms pure white light. "
		+ "One interesting thing this does explain though, is why the majority of plants are green. The color we see "
		+ "is the wavelength of light being reflected from the plant toward our eyes. Other wavelengths are absorbed "
		+ "by the plant. Wavelengths in the green spectrum are most abundant and would result in damage to the plant "
		+ "if they were absorbed instead of reflected. Too much energy at the peak of the Suns emission spectrum! "
		+ "To protect themselves plants reflect this wavelength and absorb the other less energetic wavelengths on "
		+ "either side of the peak.",
		2,
		"https://res.cloudinary.com/spacelabdev/image/upload/v1642880405/Glossary%20Images/blackbody_zwvwfh.jpg"
	],
	[
		"Disintegrating Planets",
		"A disintegrating planet is when a planet is losing dust and gas as it appears to "
		+ "(or actually does) disintegrate, which can result in the light from a star behind an orbiting planet "
		+ "becoming dimmed or blocked.",
		4,
		"https://res.cloudinary.com/spacelabdev/image/upload/v1642881354/Glossary%20Images/disintegrating_blcukg.jpg",
		"https://www.smithsonianmag.com/science-nature/disintegrating-planets-could-key-discovering-what-worlds-exoplanets-made-of-180971245/"
	],
	[
		"Eccentricity",
		"The eccentricity of an exoplanet or orbiting object is a measure of how much the orbit of an "
		+ "orbiting body deviates from a circle. An eccentricity of 0 would be a perfectly circular orbit, an "
		+ "eccentricity of 1 is a parabolic orbit, anything in between is an elliptical orbit.",
		5,
		'https://res.cloudinary.com/spacelabdev/image/upload/v1634069686/Glossary%20Images/planetary_orbits_glxqeb.jpg'
	],
	[
		"Eclipsing Binaries",
		"An eclipsing binary star is one whose brightness varies because the two components pass in "
		+ "front of each other. One start is \"eclipsed\" by the other.",
		5
	],
	[
		"Effective Temperature",
		"The effective temperature of a star is the temperature of a black body with the same "
		+ "luminosity per surface area as the star (defined by Stefan-Boltzmann Law). In essence, it's the surface "
		+ "temperature of a star if we assume the star to be a perfect black body.",
		5
	],
	[
		"G-dwarf Star",
		"A G-dwarf star, otherwise known as a yellow dwarf, is a type of main sequence star.",
		7
	],
	[
		"Galactic Plane",
		"The galactic plane is the plane through which the majority of a disk-shaped galaxy's mass lies, "
		+ "typically referring specifically to the Milky Way Galaxy. Directions perpendicular to galactic plane "
		+ "define the galactic poles.",
		7
	],
	[
		"Gravitational Lensing",
		"Gravitational lensing is when light from a star located behind a black hole or other "
		+ "massive object is bent around the massive object, distorting the image of the star and allowing you to "
		+ "see it even though it exists behind another object in the sky. In some cases it can result in multiple "
		+ "images of the same object appearing in the region around a black hole.",
		7
	],
	[
		"Hot Jupiter",
		"A hot jupiter is a class of giant exoplanets that resemble Jupiter and have very short orbital "
		+ "periods, meaning that they are orbiting much closer to their star. According to CalTech, orbital "
		+ "periods of Hot Jupiters are usually less than or equal to 10 days. They are easy to identify using "
		+ "transit methods because of their proximity to stars.",
		8
	],
	[
		"Hydrogen-Helium Envelope",
		"A hydrogen/helium envelope is like the \"envelope\" of gases surrounding gas giants, "
		+ "and describes the pockets of gas surrounding certain types of exoplanets.",
		8
	],
	[
		"Insolation Flux",
		"Insolation flux is the measure of the amount of solar radiation an exoplanet receives.",
		9
	],
	[
		"Limb Darkening",
		"Limb darkening is the optical effect seen in stars where the outer edge of the star appears "
		+ "dimmer or darker, while the center of the star appears brighter. The darker outer edge is referred to "
		+ "as the stellar limb.",
		12
	],
	[
		"Log g [cgs]",
		"Log g in units of [cgs] describes the surface gravity on an exoplanet, otherwise known as the "
		+ "acceleration due to gravity.",
		12
	],
	[
		"Main sequence star",
		"A main sequence star is a star in the middle of its life cycle that is still fusing "
		+ "hydrogen to form helium, meaning it still has hydrogen reserves.",
		13
	],
	[
		"Mutual Inclinations",
		"Orbital inclination is the tilt of an orbit around a celestial body with reference to a "
		+ "particular and arbitrarily chosen plane. Mutual inclination, therefore, is a measure of the "
		+ "inclinations of two orbiting bodies",
		13
	],
	[
		"Orbital Inclination",
		"Orbital inclination is the tilt of an object's orbit around a celestial body, expressed as "
		+ "the angle between a reference plane and the axis of direction of the orbiting object, where the "
		+ "reference plane is an arbitrary choice.",
		15
	],
	[
		"Photoevaporation",
		"Photoevaporation is the process in which radiation ionises gas and causes it to disperse away "
		+ "from the ionising source of the radiation.",
		16
	],
	[
		"Relativistic Beaming",
		"In relativistic frames, relativistic beaming is when a light source is emitted in one "
		+ "frame of reference, but that frame of reference is moving relative to another, therefore shifting the "
		+ "appearance of the light. Occurs with bodies emitting light that are moving near the speed of light. "
		+ "Therefore, if a star were moving past you at near the speed of light, it's light would appear to become "
		+ "focused in the direction of motion, whereas if you were at rest relative to that star it's light would "
		+ "emit in all directions.",
		18
	],
	[
		"Scale Heights",
		"Scale height refers to the distance over which a physical variable decreases by a factor of e. "
		+ "In terms of a galaxy, the scale height describes the height above the galactic disk/ galactic plane "
		+ "\"at which the density of a particular constituent of the disk has declined by e\".",
		19
	],
	[
		"Secondary Eclipse",
		"A secondary eclipse is when a planet passes behind a star and the light from the planet is dimmed.",
		19
	],
	[
		"Stellar Disk",
		"A stellar disk is the ring-shaped accumulation of matter that orbits around a star.",
		19
	],
	[
		"Stellar Limb",
		"The stellar limb is the outer edge of a star, which appears darker due to the effect of limb darkening.",
		19
	],
	[
		"Stellar Variability",
		"Stellar variability describes how stars change throughout their lifetimes, "
		+ "such as variations in brightness and size depending on their position in the sequence of star-lives.",
		19
	],
	[
		"Super-Earths",
		"Super-Earths are exoplanets whose mass is higher than Earth's, but still significantly smaller "
		+ "than that of the ice giants.",
		19
	],
	[
		"Three body resonance",
		"Orbital resonance is when orbiting bodies exert periodic gravitational influence on each "
		+ "other during orbits. Three-body resonance describes when orbital resonance occurs between three orbiting "
		+ "bodies (such as in the infamous three-body problem).",
		20
	],
	[
		"Threshold Crossing Events (TCE)",
		"A TCE is a potentially periodic decrease in the brightness of a star that has "
		+ "been detected in a search for exoplanets using a light curve.",
		20
	],
	[
		"Tidal circularization",
		"Tidal circularization is the process in which the orbit of an orbiting body gradually "
		+ "becomes more circular over time. It's an effect of the tidal forces between an orbiting body and the "
		+ "object that it orbits, where the eccentricity (measure of how much an orbit deviates from a circle) "
		+ "decreases over time.",
		20
	],
	[
		"Transit Depth",
		"A transit is an object that passes in front of a star, such that the transit depth is the ratio "
		+ "of the surface area of the star's disk blocked out by the planet's disk. In other words, the ratio of "
		+ "the area of the planet to the area of the star, which can be used to calculate the size of the planet.",
		20
	],
	[
		"Transit Midpoint",
		"The transit midpoint of a transiting object is the average of the time from when the "
		+ "exoplanet begins to cross the stellar limb to the time the candidate finishes crossing the stellar limb.",
		20
	],
	[
		"Transit timing variation",
		"Transit timing variation is a method for detecting exoplanets by observing variations "
		+ "in the timing of a transit. It is based on the idea that when a planet crosses a star and gets tugged on by "
		+ "a second planet, it will speed up or slow down, and therefore won't cross the star when predicted. The "
		+ "difference in timing allows for the prediction of a second planet.",
		20
	],
	[
		"Transits",
		"A transit is an object or exoplanet passing in front of a star and dimming its light.",
		20
	],
	[
		"Warm Jupiter",
		"Warm Jupiters are a type of planet classified as being between Jupiter-like planets and Hot Jupiters, in "
		+ "which their orbital periods are between that of Jupiters (over 100 days) and Hot Jupiters (1 to 10 days).",
		23
	],
];