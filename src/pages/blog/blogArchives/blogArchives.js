import React, {useContext} from "react";
import {UniversalContext} from "../../../App";
import HeroImage from "../../../components/heroImage/heroImage";
import Footer from "../../../components/footer/footer";
import {Link} from "react-router-dom";
import "./blogArchives.scss";

/**
 * Returns gallery of all blog posts
 * @returns {JSX.Element}
 * @constructor
 */
export default function BlogArchives() {
	const context = useContext(UniversalContext);
	const blogs = context.blogArray.items;
	const setBlogDetails = context.setBlogDetails;
	let blogArray = [];

	function handleClick(blog) {
		setBlogDetails(blog);
	}

	if (blogs !== undefined) {
		for (let i = 0; i < blogs.length; i++) {
			let content = blogs[i]['content:encoded'];
			content = content.toString();
			let imageURL = content.substring(content.indexOf("src=") + 5,
				content.indexOf(">", content.indexOf("src=") + 5) - 3);
			blogArray.push(
				<Link to={"/blogdetails"} className={"blog-tile"}>
					<a
					   onClick={() => handleClick(content)}		
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
				</Link>
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
