import "../../participate.scss";
import "./apply.scss";
import { useForm, ValidationError } from "@formspree/react";
import Navigation from "../../../../../components/navigation/MainNavigation/MainNavigation";
import Footer from "../../../../../components/Footer/Footer";
import ThankYou from "../ThankYou/ThankYou";
import internsImage from "../../../../../assets/homeAssets/image1.jpg";
import star from "../../assets/star.png";
import greenPlanet from "../../assets/green-planet.png";
import { Link } from "react-router-dom";

export default function Apply() {
	const [state, handleSubmit] = useForm("xoqzzpzj");

	if (state.succeeded) {
		return <ThankYou />;
	}

	return (
		<div className="participate-landing-page">
			<Navigation />
			<section className="participate-section p-apply-thank-you">
				{/*Again, not sure why but h2 needs to be nested 
					in div to not text-transform */}
				<div>
					<h2>Thank you for your interest in joining our team!</h2>
				</div>
				<h3>
					Please provide us with the following information and we will
					contact you soon.
				</h3>
				<div className="app-img-container">
					<form
						id="application-form"
						className="p-application-form"
						onSubmit={handleSubmit}
					>
						<div>
							<label htmlFor="name">Full Name</label>
							<input type="text" id="name" name="name" required />
						</div>
						<div>
							<label htmlFor="email">Email Address</label>
							<input
								type="email"
								id="email"
								name="email"
								required
							/>
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
						</div>
						<div>
							<label htmlFor="linkedin">
								LinkedIn Profile (optional)
							</label>
							<input type="url" id="linkedin" name="linkedin" />
							<ValidationError
								prefix="Message"
								field="interest"
								errors={state.errors}
							/>
						</div>
						<div>
							<label htmlFor="team">Team of Interest</label>
							<select id="team" name="team" required>
								<option default value="ux-ui-design">
									UX/UI Design
								</option>
								<option value="Front End Development">
									Front End Development
								</option>
								<option value="Back End Development">
									Back End Development
								</option>
								<option value="3D Development">
									3D Development
								</option>
								<option value="Data Science">
									Data Science
								</option>
								<option value="Marketing">Marketing</option>
								<option value="Creative Content">
									Creative Content
								</option>
								<option value="Finance">Finance</option>
							</select>
						</div>
						<div>
							<label htmlFor="application">
								Why are you interested in volunteering at
								SpaceLab?
							</label>
							<textarea
								id="application"
								name="application"
								required
							/>
							<ValidationError
								prefix="Message"
								field="interest"
								errors={state.errors}
							/>
						</div>
					</form>
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
					<button
						disabled={state.submitting}
						type="submit"
						form="application-form"
					>
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
