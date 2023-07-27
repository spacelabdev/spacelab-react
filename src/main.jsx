import React from "react";
import { Redirect, Route, Switch } from "react-router";
import BlogArchives from "./components/BlogArchives/BlogArchives";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import CookiePolicy from "./pages/Cookiepolicy/Cookiepolicy";
import Donate from "./pages/Donate/Donate";
import Glossary from "./pages/Glossary/Glossary";
import Home from "./pages/Home/Home";
import Podcast from "./pages/Podcast/Podcast";
import PrivacyPolicy from "./pages/Privacypolicy/Privacypolicy";
import Projects from "./pages/Projects/Projects";
import About from "./pages/about/About";
import Discovery from "./pages/discovery/Discovery";
/* landing pages */
import PaypalError from "./pages/Donate/PaypalError/PaypalError";
import PaypalSuccess from "./pages/Donate/PaypalSuccess/PaypalSuccess";
import {
	DonateLandingPage,
	DonatePaymentPage,
	DonateSuccessPage,
} from "./pages/landingPages/donate/Donate";
import EndorseUs from "./pages/landingPages/endorseUs/EndorseUs";
import Participate from "./pages/landingPages/participate/Participate";
import Apply from "./pages/landingPages/participate/components/Apply/Apply";
import ParticipateV2 from "./pages/landingPages/participate/participatev2/ParticipateV2";
import SignUp from "./pages/landingPages/signUp/SignUp";

/**
 * Handles Routing
 * @returns {JSX.Element}
 * @constructor
 */
export default function Main() {
	return (
		<Switch>
			<Route exact path="/about" component={About} />
			<Route exact path="/archives" component={BlogArchives} />
			<Route exact path="/blog" component={Blog} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/discovery" component={Discovery} />
			<Route exact path="/donate" component={Donate} />
			<Route exact path="/donate/success" component={PaypalSuccess} />
			<Route exact path="/donate/error" component={PaypalError} />
			<Route exact path="/glossary" component={Glossary} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/projects" component={Projects} />
			<Route exact path="/podcast" component={Podcast} />
			<Route exact path="/cookie-policy" component={CookiePolicy} />
			<Route exact path="/privacy-policy" component={PrivacyPolicy} />
			{/* landing page routing must go BEFORE the catch all '/' route*/}
			<Route
				exact
				path="/campaigns/donate"
				component={DonateLandingPage}
			/>
			<Route
				exact
				path="/campaigns/donate/donate-payment"
				component={DonatePaymentPage}
			/>
			<Route
				exact
				path="/campaigns/donate/donate-success"
				component={DonateSuccessPage}
			/>
			<Route exact path="/campaigns/endorseUs" component={EndorseUs} />
			<Route
				exact
				path="/campaigns/participate"
				component={Participate}
			/>
			<Route
				exact
				path="/campaigns/participatev2"
				component={ParticipateV2}
			/>
			<Route
				exact
				path="/campaigns/participate/apply"
				component={Apply}
			/>
			<Route exact path="/campaigns/signUp" component={SignUp} />
			<Route path="/" component={Home} />
			<Redirect to="/home" />
		</Switch>
	);
}
