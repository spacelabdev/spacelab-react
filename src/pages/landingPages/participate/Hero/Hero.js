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
			<img
				src={spacelabImage}
				alt="SpaceLab logo"
				className="spacelab-image"
			/>
			<p>
				SpaceLab is a people-incubator focusing on outer-space tech
				initiatives. We support and help underrepresented communities
				gain experience with real-world projects to help diversify the
				tech space!
			</p>
			<button>
				{/* change this link */}
				<a href="https://spacelab.space">Apply Now</a>
			</button>
			{/* add "read more" which scrolls to next section */}
			<img
				src={galaxyOverlay}
				alt="Overlay of Galaxy"
				className="galaxy-overlay overlay"
			/>
			<img
				src={starsOverlay}
				alt="Overlay of Stars"
				className="stars-overlay overlay"
			/>
			<img src={star} alt="Star" className="star1 overlay" />
			<img src={star} alt="Star" className="star2 overlay" />
			<img src={star} alt="Star" className="star3 overlay" />
			<img src={star} alt="Star" className="star4 overlay" />
			<img src={star} alt="Star" className="star5 overlay" />
			<img src={star} alt="Star" className="star6 overlay" />
			<img src={star} alt="Star" className="star7 overlay" />
			<img
				src={greenPlanet}
				alt="Green Planet"
				className="green-planet overlay"
			/>
		</section>
	);
}
