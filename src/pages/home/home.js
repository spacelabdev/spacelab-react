import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import DiversityInTechSection from "./diversityInTech";
import HorizonSection from "./horizonSection";
import SupportTheCauseSection from "./supportTheCauseSection";
import Footer from "../../components/footer/footer";
import BlogCarousel from "../blog/blogCarousel";
import "./home.scss";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
	return (
		<>
			<HeroImage heroTitle="HOME" />
			<DiversityInTechSection />
			<HorizonSection />
			<SupportTheCauseSection />
			<div className={"blog-container"}>
				<h2>Featured Blog Posts</h2>
				<BlogCarousel />
			</div>
			<Footer />
		</>
	);
}
