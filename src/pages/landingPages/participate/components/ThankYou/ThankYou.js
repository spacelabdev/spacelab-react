import "../../Participate.scss";
import "../Apply/Apply.scss";
import Navigation from "../../../../../components/navigation/mainNavMenu/navigation";
import Footer from "../../../../../components/footer/footer";
import thankYouImage from "../../assets/thank-you.jpg";
import star from "../../assets/star.png";
import greenPlanet from "../../assets/green-planet.png";
import { Link } from "react-router-dom";

export default function ThankYou() {
	return (
		<div className="participate-landing-page">
			<Navigation />
			<section className="participate-section p-apply-thank-you">
				{/*Again, not sure why but h2 needs to be nested 
				in div to not text-transform */}
				<div>
					<h2>Thank you! Your application has been submitted.</h2>
				</div>
				<h3>
					We will contact you soon to further discuss the position.
				</h3>
				<div className="img-swap">
					<h3 className="learn-more">
						In the meantime, learn more about our organization{" "}
						<Link to={"/"}>here</Link>.
					</h3>
					<img
						className="thank-you-img"
						alt="Group of friends watching the sun setting at dusk."
						src={thankYouImage}
					/>
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
