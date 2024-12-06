import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import DiversityInTechSection from "./homePageComponents/DiversityInTech/DiversityInTech";
import DiversityInTechStatisticsSection from "./homePageComponents/DiversityInTechStatistics/DiversityInTechStatistics";
import HorizonSection from "./homePageComponents/OnTheHorizon/HorizonSection";
import SupportTheCauseSection from "./homePageComponents/SupportTheCause/SupportTheCauseSection";
import ContactUsSection from "./homePageComponents/ContactUs/ContactUsSection";
import Footer from "../../components/Footer/Footer";
import BlogCarousel from "../../components/carouselComponents/BlogCarousel/BlogCarousel";
import "./home.scss";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
	return (
		<div className={"homepage-container"}>
			<HeroImage heroTitle="HOME" />

			{/* About */}
			<DiversityInTechSection />

			{/* Statistics */}			
			<DiversityInTechStatisticsSection />

			{/* Future Explorations */}
			<HorizonSection />

			<SupportTheCauseSection />
			<ContactUsSection />
			<Footer />
		</div>
	);
}
