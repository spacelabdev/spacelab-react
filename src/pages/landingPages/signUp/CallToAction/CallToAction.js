import "./CallToAction.scss";
import planetImage from "../assets/solen-feyissa-54xmXW7tJzo-unsplash.png"
import SignUpForm from "./SignUpForm/SignUpForm"

export default function CallToAction() {
    return (
        <div className="sign-up-landing-page-section cta-container">
            <div className="cta-text">
                <span className="cta-heading"> Let's Stay In Orbit!</span>
                <span className="cta-subheading">Subscribe now, and join our community of space enthusiasts.</span>
            </div>

            <SignUpForm />
            
            <div className="planet-image-wrapper">
                <img src={planetImage} className="planet-image"></img>
                <div className="planet-bg-glow"></div>
            </div>
        </div>
        
    )

}