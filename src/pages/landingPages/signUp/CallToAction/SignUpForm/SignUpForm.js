import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import arrowForward from "../../assets/arrow_forward_ios.png";

export default function SignUpForm() {
    const [state, handleSubmit] = useForm("xoqzbogj");

    let [mousePosition, setMousePosition] = useState({x:0, y:0});

    function handleMouseMove({clientX, clientY, currentTarget}) {
		let { left, top } = currentTarget.getBoundingClientRect();
		let xPosition = clientX - left;
		let yPosition = clientY - top;
		setMousePosition({ x: xPosition, y: yPosition });
        console.log("x: ", mousePosition.x, "y: ", mousePosition.y )
	}

    if (state.succeeded) {
		return (
			<div className={"submit-form-container"}>
				<h2>Thank You!</h2>
				<p>
					Your submission has been received! We'll be in touch with
					you shortly.
				</p>
			</div>
		);
	}

    return (
        <div className="sign-up-button-container">
            
            <form 
                className="sign-up-subscription-form"
                onSubmit={handleSubmit}
                onMouseMove={handleMouseMove}
                style={{
                    background: `radial-gradient(
                        circle at ${mousePosition.x}px ${mousePosition.y}px, 
                        rgba(255, 255, 255, 0) 0%,
                        rgba(255, 255, 255, 0.15) 40%,
                        rgba(255, 255, 255, 0.25) 100%`
                    }}
            >
                <input
                    className="sign-up-email-input"
                    type="email"
                    placeholder="ENTER EMAIL TO SUBSCRIBE"
                    name="email"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <button
                    className="sign-up-email-submit"
                    type="submit"
                    disabled={state.submitting}
                >
                    <img src={arrowForward} className="submit-arrow-image"></img>
                </button>
            </form>
                    
		</div>
    )
}