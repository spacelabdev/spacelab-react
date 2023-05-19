import React, { useState } from "react";
import "./Modal.scss";
import SignUpForm from "./SignUpForm";
import planetImage from "../../../../assets/componentAssets/solen-feyissa-54xmXW7tJzo-unsplash.png";

export default function Modal({ open, onClose }) {
	if (!open) return null;

	return (
		<>
			<div className="modal-container">
				<div onClick={onClose} className="close-modal">
					X
				</div>
				<div className="modal-text">
					<span className="modal-heading"> Let's Stay In Orbit!</span>
					<span className="modal-subheading">
						Subscribe now, and join our community of space
						enthusiasts.
					</span>
				</div>

				<div className="modal-button-container">
					<SignUpForm />
				</div>

				<div className="modal-planet-image-wrapper">
					<img src={planetImage} className="modal-planet-image"></img>
					<div className="modal-bg-glow"></div>
				</div>
			</div>
		</>
	);
}
