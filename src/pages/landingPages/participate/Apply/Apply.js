import "../Participate.scss";
import "./Apply.scss";
import Navigation from "../../../../components/navigation/mainNavMenu/navigation";
import ApplicationForm from "../components/ApplicationForm/ApplicationForm";
import Footer from "../../../../components/footer/footer";
import internsImage from "../../../../assets/homeAssets/image1.jpg";
import star from "../assets/star.png";
import greenPlanet from "../assets/green-planet.png";
import { Link } from "react-router-dom";

export default function Apply() {
	return (
		<div className="participate-landing-page">
			<Navigation />
			<section className="participate-section p-apply">
				<div>
					<h2>Thank you for your interest in joining our team!</h2>
				</div>
				<h3>
					Please provide us with the following information and we will
					contact you soon.
				</h3>
				<div className="app-img-container">
					<ApplicationForm />
					<div className="img-container">
						<img
							alt="Inters looking at laptop"
							src={internsImage}
						/>
					</div>
				</div>
				<div className="buttons-container">
					<button>
						<Link to={"/campaigns/participate"}>Back</Link>
					</button>
					<button type="submit" form="application-form">
						Submit
					</button>
				</div>
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
			<Footer />
		</div>
	);
}
