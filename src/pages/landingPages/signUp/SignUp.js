import "./signUp.scss";
import Navigation from "../../../components/navigation/mainNavMenu/navigation";
import CallToAction from "./CallToAction/CallToAction";
import Footer from "../../../components/footer/footer";

/**
 * Renders Sign Up Landing page
 * @returns {JSX.Element}
 * @constructor
 */

export default function SignUp() {
	return (
		<div className="sign-up-landing-page">
			<Navigation/>
			<CallToAction/>
			<Footer/>
		</div>
	);
}
