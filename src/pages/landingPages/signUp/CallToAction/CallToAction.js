import "./CallToAction.scss";
import React, { useState } from "react";
import planetImage from "../assets/solen-feyissa-54xmXW7tJzo-unsplash.png";
import closeX from "../assets/close.png"
import SignUpForm from "./SignUpForm/SignUpForm";
import { Link } from 'react-router-dom';

export default function CallToAction() {
  const [success, setSuccess] = useState(false);

  function handleSuccess() {
    setSuccess(true);
  }

  return (
    <div className="sign-up-landing-page-section cta-container">
        {success ? (
            <div className={`cta-text ${success ? 'success-state' : ''}`}>
                <div className="bounding-box">
                    <Link 
                        to={"/"}
                        style={{ textDecoration: "none" }}
                    >
                        <img
                            src={closeX}
                            className="close-png"
                            alt="close png"
                        />
                    </Link>
                </div>
                <span className="cta-heading">Thank You!</span>
                <br />
                <span className="cta-subheading">
                    You have now subscribed to our email newsletter. You should receive
                    <br/>
                    a confirmation email soon. Ad Astra!🚀
                </span>
            </div>
        ) : (
            <div className="cta-text">
                <span className="cta-heading">Let's Stay In Orbit!</span>
                <span className="cta-subheading">
                    Subscribe now, and join our community of space enthusiasts.
                </span>
            </div>
        )}

        {!success && <SignUpForm onSuccess={handleSuccess}/>}

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
