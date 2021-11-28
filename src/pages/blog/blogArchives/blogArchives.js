import React, {useContext} from "react";
import {UniversalContext} from "../../../App";
import HeroImage from "../../../components/heroImage/heroImage";
import Footer from "../../../components/footer/footer";
import "./blogArchives.scss";

/**
 * Returns gallery of all blog posts
 * @returns {JSX.Element}
 * @constructor
 */
export default function BlogArchives() {
	const context = useContext(UniversalContext);
	const blogs = context.blogArray.items;
	let blogArray = [];

	if (blogs !== undefined) {
		for (let i = 0; i < blogs.length; i++) {
			let content = blogs[i]['content:encoded'];
			content = content.toString();
			let imageURL = content.substring(content.indexOf("src=") + 5,
				content.indexOf(">", content.indexOf("src=") + 5) - 3);

			blogArray.push(
				<a className={"blog-tile"}
				   href={blogs[i].link}
				   target="_blank"
				   rel="nofollow noopener noreferrer">
					<div className={"blog-tile-image-wrapper"}>
						<img className={"blog-tile-image"}
						     src={imageURL}
						     alt={"blog tile"}
						/>
						<div>
							<p className={"blog-title"}>{blogs[i].title}</p>
						</div>
					</div>
				</a>
			);
		}
	}

	return (
		<>
			<HeroImage/>
			<div id={"blog-archive-container"}>
				<div id={"blog-archive-header"}>Archived Blogs</div>
				<div id={"blog-archives"}>{blogArray}</div>
			</div>
			<Footer/>
		</>
	);
};
