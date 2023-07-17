import "./callToAction.scss";
import React, { useState } from "react";
import ThankYou from "./ThankYou/ThankYou";
import LetsStayInOrbit from "./LetsStayInOrbit/LetsStayInOrbit";
import planetImage from "../assets/solen-feyissa-54xmXW7tJzo-unsplash.png";
import closeX from "../assets/close.png";
import SignUpForm from "./SignUpForm/SignUpForm";
import { Link } from "react-router-dom";

export default function CallToAction() {
	const [success, setSuccess] = useState(false);
	const [text] = useState("b");

	function handleSuccess() {
		setSuccess(true);
	}

	return (
		<div className="sign-up-landing-page-section cta-container">
			<div className={`cta-text ${success ? "success-state" : ""}`}>
				{success ? (
					<>
						<div className="bounding-box">
							<Link to={"/"} style={{ textDecoration: "none" }}>
								<img
									src={closeX}
									className="close-png"
									alt="close png"
								/>
							</Link>
						</div>

						<ThankYou text={text} />
					</>
				) : (
					<LetsStayInOrbit text={text} />
				)}

				{!success && <SignUpForm onSuccess={handleSuccess} />}
			</div>

			<div className="planet-image-wrapper">
				<img
					src={planetImage}
					className="planet-image"
					alt="blue planet art by Solen Feyissa"
				/>
				<div className="planet-bg-glow"></div>
			</div>
		</div>
	);
}
