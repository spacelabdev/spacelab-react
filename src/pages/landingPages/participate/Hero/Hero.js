import "./Hero.scss";
import spacelabImage from "../assets/spacelab.svg";

export default function Hero() {
	return (
		<section
			className="participate-hero"
			style={{ backgroundImage: `url(${spacelabImage})` }}
		>
			<div className="hero-container">
				<h1>Join Us At</h1>
				<p>
					SpaceLab is a people-incubator focusing on outer-space tech
					initiatives. We support and help underrepresented
					communities gain experience with real-world projects to help
					diversify the tech space!
				</p>
				<button>
					{/* add link */}
					<a href="#">Apply Now</a>
				</button>
			</div>
		</section>
	);
}
