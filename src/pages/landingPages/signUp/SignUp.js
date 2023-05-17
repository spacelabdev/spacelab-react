import React, {useState} from "react";
import Footer from "../../../components/footer/footer";
import "./signUp.scss";
import Navigation from "../../../components/navigation/mainNavMenu/navigation"
import Modal from "./Modal/Modal"
import Home from "../../home/home"

/**
 * Renders Sign Up Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function SignUp() {
	const [openModal, setOpenModal] = useState(true)

	return (
		<>
			<Navigation className="modal-nav"/>
			<div className="overlay">
				<Modal open={openModal} onClose={() => setOpenModal(false)} />
				<Home/>
			</div>
		</>
	);
}
