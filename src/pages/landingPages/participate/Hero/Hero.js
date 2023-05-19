import "./Hero.scss";
import joinUsHeader from "../assets/join-us-header.svg";
import heroBackground from "../assets/hero-background.png";
import star from "../assets/star.png";
import greenPlanet from "../assets/green-planet.png";
import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<section
			className="participate-hero"
			style={{ backgroundImage: `url(${heroBackground})` }}
		>
			<img
				src={joinUsHeader}
				alt="Join Us At SpaceLab"
				className="spacelab-header"
			/>
			<p>
				SpaceLab is a people-incubator focusing on outer-space tech
				initiatives. We support and help underrepresented communities
				gain experience with real-world projects to help diversify the
				tech space!
			</p>
			<button>
				<Link to={"/contact"}>Apply Now</Link>
			</button>
			<button className="read-more">
				<a href="#how-it-works">Read more ↓</a>
			</button>
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
