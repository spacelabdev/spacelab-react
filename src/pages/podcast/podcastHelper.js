import galaxy from "../../assets/podcastAssets/Galaxy.png";
import planet from "../../assets/podcastAssets/Planet.png";
import planets from "../../assets/podcastAssets/Planets.png";

export const termsArray = [
	"Our Solar System",
	"Planets",
	"Exoplanets",
	"Stars",
	"Space",
	"Earth",
];

/**
 * Array of Dates and descriptions for Spacelab History timeline
 * @type {string[][]}
 */
export const podcastArray = [
	{
		title: "Our Solar System",
		alt: "Galaxy",
		image: galaxy,
		episodeNumber: 1,
		seasonNumber: 1,
		tags: ["Planets", "Space", "Stars"],
		description: `ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            imperdiet adipiscing libero commodo egestas ac pretium, at.
            Viverra viverra quam non aliquet. Nec volutpat in morbi
            molestie sem porttitor massa. Massa ac viverra montes,
            maecenas tempus, lorem ultrices.`,
		datePosted: "Oct 2, 2022",
		duration: "54 Minutes",
		youtubeLink: "https://www.youtube.com/",
		spotifyLink: "https://open.spotify.com/",
	},
	{
		title: "The Next Earth",
		image: planet,
		alt: "Purple planet with rings",
		episodeNumber: 2,
		seasonNumber: 1,
		tags: ["Asteroids", "Moon", "Earth"],
		description: `ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            imperdiet adipiscing libero commodo egestas ac pretium, at.
            Viverra viverra quam non aliquet. Nec volutpat in morbi
            molestie sem porttitor massa. Massa ac viverra montes,
            maecenas tempus, lorem ultrices.`,
		datePosted: "Oct 9, 2022",
		duration: "55 Minutes",
		youtubeLink: "https://www.youtube.com/",
		spotifyLink: "https://open.spotify.com/",
	},
	{
		title: "5000 Exoplanets",
		image: planets,
		alt: "Ring of multicolored planets",
		episodeNumber: 3,
		seasonNumber: 1,
		tags: ["Supernova", "Jupiter", "Astronaut"],
		description: `ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            imperdiet adipiscing libero commodo egestas ac pretium, at.
            Viverra viverra quam non aliquet. Nec volutpat in morbi
            molestie sem porttitor massa. Massa ac viverra montes,
            maecenas tempus, lorem ultrices.`,
		datePosted: "Oct 16, 2022",
		duration: "50 Minutes",
		youtubeLink: "https://www.youtube.com/",
		spotifyLink: "https://open.spotify.com/",
	},
];
