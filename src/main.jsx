import React from "react";
import { Route, Switch, Redirect } from "react-router";
import About from "./pages/about/About";
import Blog from "./pages/Blog/Blog";
import Discovery from "./pages/discovery/Discovery";
import Glossary from "./pages/Glossary/Glossary";
import Home from "./pages/home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
// import Podcast from "./pages/Podcast/Podcast";
import CookiePolicy from "./pages/Cookiepolicy/Cookiepolicy";
import PrivacyPolicy from "./pages/Privacypolicy/Privacypolicy";
import BlogArchives from "./components/BlogArchives/BlogArchives";
/* landing pages */
// import {
// 	DonateLandingPage,
// 	DonatePaymentPage,
// 	DonateSuccessPage,
// } from "pages/landingPages/donate/";
import EndorseUs from "./pages/landingPages/endorseUs/EndorseUs";
import Participate from "./pages/landingPages/participate/Participate";
import ParticipateV2 from "./pages/landingPages/participate/participatev2/ParticipateV2";
import Apply from "./pages/landingPages/participate/components/Apply/Apply";
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
			<Route exact path="/glossary" component={Glossary} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/projects" component={Projects} />
			{/* <Route exact path="/podcast" component={Podcast} /> */}
			<Route exact path="/cookie-policy" component={CookiePolicy} />
			<Route exact path="/privacy-policy" component={PrivacyPolicy} />
			{/* landing page routing must go BEFORE the catch all '/' route*/}
			{/* <Route
				exact
				path="/pages/landingPages/donate"
				component={DonateLandingPage}
			/>
			<Route
				exact
				path="/pages/landingPages/donate"
				component={DonatePaymentPage}
			/>
			<Route
				exact
				path="/pages/landingPages/donate"
				component={DonateSuccessPage}
			/> */}
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
