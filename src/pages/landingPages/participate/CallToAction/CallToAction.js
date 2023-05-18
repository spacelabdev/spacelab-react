import "./CallToAction.scss";
import { Link } from "react-router-dom";

export default function CallToAction() {
	return (
		<section className="participate-section call-to-action">
			{/*
            h2 needs to be in div for text to 
            not transform, unsure of why
            */}
			<div>
				<h2>Ready to Join SpaceLab?</h2>
			</div>
			<button>
				<Link to={"/contact"}>Apply Now</Link>
			</button>
		</section>
	);
}
