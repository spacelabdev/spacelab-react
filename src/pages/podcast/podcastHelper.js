import tempImage from "../../../src/assets/ju-guan-D-jLxBtEwaA-unsplash.jpg";
import galaxy from "../../assets/podcastAssets/Galaxy.png";
import planet from "../../assets/podcastAssets/Planet.png";
import planets from "../../assets/podcastAssets/Planets.png";

/**
 * Array of Dates and descriptions for Spacelab History timeline
 * @type {string[][]}
 */
export const podcastArray = [
	{
		title: "Our Solar System",
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
