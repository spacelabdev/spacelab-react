import React, {useContext, useEffect} from "react";
import {UniversalContext} from "../../../App";
/**
 * Returns individual blog post
 * @returns {JSX.Element}
 * @constructor
 */

export default function BlogArchives() {
	const context = useContext(UniversalContext);
	let blogDetails = context.blogDetails

	const stringToHTML = function (htmlString) {
	const dom = document.createElement('div');
	dom.setAttribute('id', 'details_blog')
	dom.innerHTML = htmlString;

	const detailsDiv = document.querySelector("#details-container")
	detailsDiv.appendChild(dom)
};

useEffect(() => {
	stringToHTML(blogDetails)
}, []);


	return (
		<>
			<div id={"details-container"}> </div>
		</>
	);
};
