import React from "react";
import Navigation from "../../../components/navigation/MainNavigation/MainNavigation";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import WhatWereWorkingOn from "./components/WhatWereWorkingOn/WhatWereWorkingOn";
import Internships from "./components/Internships/Internships";
import Alumni from "./components/Alumni/Alumni";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "../../../components/Footer/Footer";
import "./participate.scss";
import { Experiment, Variant } from "@marvelapp/react-ab-test";
import ParticipateV2 from "./participatev2/ParticipateV2";

/**
 * Renders Participate Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Participate() {
	return (<>
		<Experiment name="ParticipatePageTest">
			<Variant name="Participate.v1">
				<div className="participate-landing-page">
					<Navigation />
					<Hero />
					<HowItWorks />
					<WhatWereWorkingOn />
					<Internships />
					<Alumni />
					<CallToAction />
					<Footer />
				</div>
			</Variant>

			<Variant name="Participate.v2">
				<ParticipateV2 />
			</Variant>
		</Experiment>
	</>
	);
}
