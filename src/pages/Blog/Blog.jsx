import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import BlogArchives from "../../components/BlogArchives/BlogArchives";
import Footer from "../../components/Footer/Footer";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Blog() {
	return (
		<>
			<HeroImage heroTitle="BLOG" />
			<BlogArchives />
			<Footer />
		</>
	);
}
