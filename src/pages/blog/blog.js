import React from "react";
import './blog.scss';
import HeroImage from "../../components/heroImage/heroImage";
import BlogCarousel from "./blogCarousel";
import Footer from "../../components/footer/footer";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Blog() {
	return (
		<>
			<HeroImage/>
			<div id={"blog-gallery"}>
				<BlogCarousel/>
			</div>
			<Footer/>
		</>
	);
};