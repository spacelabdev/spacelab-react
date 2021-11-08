import React from "react";
import "./home.scss";
import NavigationButton from "../../components/navigationButton/navigationButton";

/**
 * Renders Support the Cause section
 * @returns {JSX.Element}
 * @constructor
 */
export default function SupportTheCauseSection() {
	return (
		<div id={"support-the-cause-section"}>
			<div id={"support-the-cause-header"}>SUPPORT THE CAUSE</div>
			<p id={"support-the-cause-content"}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
				officia deserunt mollit anim id est laborum.
			</p>
			<div id={"contact-us-button-container"}>
				<NavigationButton pathName={"/contact"} buttonText={"CONTACT US"}/>
			</div>
		</div>
	);
};