import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import DiversityInTechSection from "./homePageComponents/DiversityInTech/diversityInTech";
import DiversityInTechStatisticsSection from "./homePageComponents/DiversityInTechStatistics/diversityInTechStatistics";
import HorizonSection from "./homePageComponents/OnTheHorizon/horizonSection";
import SupportTheCauseSection from "./homePageComponents/SupportTheCause/supportTheCauseSection";
import ContactUsSection from "./homePageComponents/ContactUs/contactUsSection";
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
			<DiversityInTechStatisticsSection />
			<HorizonSection />
			<SupportTheCauseSection />
			<ContactUsSection />
			<BlogCarousel isHomePage={true} />
			<Footer />
		</div>
	);
}
