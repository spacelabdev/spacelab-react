import "./signUp.scss";
import Navigation from "../../../components/navigation/MainNavigation/MainNavigation";
import CallToAction from "./CallToAction/CallToAction";
import Footer from "../../../components/Footer/Footer";

/**
 * Renders Sign Up Landing page
 * @returns {JSX.Element}
 * @constructor
 */

export default function SignUp() {
	return (
		<div className="sign-up-landing-page">
			<Navigation />
			<CallToAction />
			<Footer />
		</div>
	);
}
