import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import BlogCarousel from "./blogCarousel";
import Footer from "../../components/footer/footer";
import './blog.scss';
import {Link} from "react-router-dom";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Blog() {
	return (
		<>
			<HeroImage/>
			<div id={"blog-container"}>
				<div id={"blog-header"}>Featured Blogs</div>
				<BlogCarousel/>
			</div>
			<div id={"archives-button-container"}>
				<button id="archives-button">
					<Link
						id="archives-link"
						to={"/archives"}
					>
						View Full Blog Archives
					</Link>
				</button>
			</div>
			<Footer/>
		</>
	);
};