import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import DiversityInTechSection from "./homePageComponents/DiversityInTech/diversityInTech";
import HorizonSection from "./homePageComponents/OnTheHorizon/horizonSection";
import SupportTheCauseSection from "./homePageComponents/SupportTheCause/supportTheCauseSection";
import Footer from "../../components/footer/footer";
import BlogCarousel from "../../components/carouselComponents/blogCarousel/blogCarousel";
import "./home.scss";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
	return (
		<div className={"homepage-container"}>
			<HeroImage heroTitle="HOME" />
			<DiversityInTechSection />
			<HorizonSection />
			<SupportTheCauseSection />
			<BlogCarousel />
			<Footer />
		</div>
	);
}
