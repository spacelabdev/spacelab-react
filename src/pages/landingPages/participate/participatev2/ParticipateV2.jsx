import React from "react";
import Navigation from "../../../../components/navigation/MainNavigation/MainNavigation";
import Footer from "../../../../components/Footer/Footer";
import HeroV2 from "./components/HeroV2/HeroV2";
import WhatWereWorkingOnV2 from "./components/WhatWereWorkingOn/WhatWereWorkingOnV2";
import HowItWorksV2 from "./components/HowItWorksV2/HowItWorksV2";
import TestimonialsV2 from "./components/Testimonials/TestimonialsV2";
import ApplyV2 from "./components/ApplyV2/ApplyV2";

import "../Participate.scss";

/**
 * Renders Participate Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function ParticipateV2() {
	return (
		<div className="participate-landing-page">
			<Navigation />
			<HeroV2 />
			<HowItWorksV2 />
			<WhatWereWorkingOnV2 />
			<TestimonialsV2 />
			<ApplyV2 />
			<Footer />
		</div>
	);
}
