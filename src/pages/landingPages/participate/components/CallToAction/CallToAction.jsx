import "./callToAction.scss";
import ctaBackground from "../../assets/cta-background.png";
import star from "../../assets/star.png";
import greenPlanet from "../../assets/green-planet.png";
import { Link } from "react-router-dom";

export default function CallToAction() {
	return (
		<section
			className="participate-section p-call-to-action"
			style={{ backgroundImage: `url(${ctaBackground})` }}
		>
			{/*
            h2 needs to be in div for text to 
            not transform, unsure of why
            */}
			<div>
				<h2>Ready to Join SpaceLab?</h2>
			</div>
			<button>
				<Link to={"/campaigns/participate/apply"}>Apply Now</Link>
			</button>
			<img
				src={greenPlanet}
				alt="Green Planet"
				className="green-planet overlay"
			/>
			<img src={star} alt="Star" className="star1 overlay" />
			<img src={star} alt="Star" className="star2 overlay" />
			<img src={star} alt="Star" className="star3 overlay" />
			<img src={star} alt="Star" className="star4 overlay" />
		</section>
	);
}
