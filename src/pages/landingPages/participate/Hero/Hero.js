import "./Hero.scss";
import spacelabImage from "../assets/spacelab.svg";
import starsOverlay from "../assets/stars-overlay.png";
import galaxyOverlay from "../assets/galaxy-overlay.png";
import star from "../assets/star.png";
import greenPlanet from "../assets/green-planet.png";

export default function Hero() {
	return (
		<section className="participate-hero">
			<h1>Join Us At</h1>
			<img src={spacelabImage} className="spacelab-image" />
			<p>
				SpaceLab is a people-incubator focusing on outer-space tech
				initiatives. We support and help underrepresented communities
				gain experience with real-world projects to help diversify the
				tech space!
			</p>
			<button>
				{/* add link */}
				<a href="https://google.com">Apply Now</a>
			</button>
			<img src={galaxyOverlay} className="galaxy-overlay overlay" />
			<img src={starsOverlay} className="stars-overlay overlay" />
			<img src={star} className="star1 overlay" />
			<img src={star} className="star2 overlay" />
			<img src={star} className="star3 overlay" />
			<img src={star} className="star4 overlay" />
			<img src={star} className="star5 overlay" />
			<img src={star} className="star6 overlay" />
			<img src={star} className="star7 overlay" />
			<img src={greenPlanet} className="green-planet overlay" />
		</section>
	);
}
