import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import arrowForward from "../../assets/arrow_forward_ios.png";
import "./SignUpForm.scss"

export default function SignUpForm() {
    const [state, handleSubmit] = useForm("xoqzbogj");

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    function handleMouseMove({ clientX, clientY, currentTarget }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        const xPosition = clientX - left;
        const yPosition = clientY - top;
        setMousePosition({ x: xPosition, y: yPosition });
    }

    if (state.succeeded) {
        return (
            <div className={"submission-successful-text"}>
                <span className="submission-successful-heading"> Ad Astra!</span>
                <br/>
                <span className="submission-successful-subheading">Thank you for subscribing to our email newsletter. You should receive a confirmation email soon.</span>
            </div>
        );
    }

    return (
        <div className="sign-up-button-container">
            <div className="radial-gradient-container"
                onMouseMove={handleMouseMove}
                style={{
                    background: `radial-gradient(
                        circle at ${mousePosition.x}px ${mousePosition.y}px, 
                        rgba(255, 255, 255, 0) 0%,
                        rgba(8,22,51,255) 15%,
                        rgba(8,22,51,255) 100%`
                    }}
            >
                <form
                    className="sign-up-subscription-form"
                    onSubmit={handleSubmit}
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
                        <img src={arrowForward} className="submit-arrow-image" alt="arrow icon"></img>
                    </button>
                </form>

            </div>
        </div>
    )
}