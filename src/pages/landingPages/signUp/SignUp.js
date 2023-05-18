import React, {useState} from "react";
import "./signUp.scss";
import Navigation from "../../../components/navigation/mainNavMenu/navigation"
import Modal from "../../../components/forms/signUpModal/Modal"
import Home from "../../home/home"

/**
 * Renders Sign Up Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function SignUp() {
	const [openModal, setOpenModal] = useState(true)
	const onClose = () => { 
		setOpenModal(false)
	}

	// comment

	return (
		<>
			<Navigation className="modal-nav"/>
			{/* I didn't need to use stopPropagation() because the modal is outside of the overlay div */}
			{/* also the overlay now disappears when you close the modal! Thanks to the conditional class below */}
			<div onClick={onClose} className={`${openModal ? "overlay" : ""}`}>
			</div>
			<Modal open={openModal} onClose={onClose} />
			<Home className="modal-home"/>
		</>
	);
}
