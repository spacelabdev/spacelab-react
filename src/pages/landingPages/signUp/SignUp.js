import React from "react";
import Footer from "../../../components/footer/footer";
import "./signUp.scss";
import Navigation from '../../../components/navigation/mainNavMenu/navigation'
import Modal from './Modal/Modal'

/**
 * Renders Sign Up Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function SignUp() {
	return (
		<>
			<Navigation/>
			<Modal />
			<Footer />
		</>
	);
}
