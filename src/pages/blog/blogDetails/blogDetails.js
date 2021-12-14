import React, {useContext, useEffect} from "react";
import {UniversalContext} from "../../../App";
import HeroImage from "../../../components/heroImage/heroImage";
import Footer from "../../../components/footer/footer";
import {searchForEmptyElement} from "../helperFunction";

/**
 * Returns individual blog post
 * @returns {JSX.Element}
 * @constructor
 */
export default function BlogDetails() {
	const context = useContext(UniversalContext);
	let blogDetails = context.blogDetails;

	const displayBlog = function (htmlString) {
		const blogDetailsDiv = document.createElement('div');
		blogDetailsDiv.setAttribute('id', 'details_blog');
		blogDetailsDiv.innerHTML = htmlString;

		const blogDetailsContainer = document.querySelector("#blogDetailsContainer");
		blogDetailsContainer.appendChild(blogDetailsDiv);
};

useEffect(() => {
	blogDetails = searchForEmptyElement(blogDetails);
	displayBlog(blogDetails);
}, []);

	return (
		<>
			<HeroImage/>
			<div id={"blogDetailsContainer"}> </div>
			<Footer/>
		</>
	);
};
