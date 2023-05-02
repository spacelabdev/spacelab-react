import React, { useContext } from "react";
import { UniversalContext } from "../../../App";
import HeroImage from "../../../components/heroImage/heroImage";
import Footer from "../../../components/footer/footer";
import "./blogArchives.scss";
import placeholder from "../../../assets/generalAssets/img_placeholder.png";

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
		for (let i in blogs) {
			let content = blogs[i]["content:encoded"];
			content = content.toString();
			let imageURL = content.substring(
				content.indexOf("src=") + 5,
				content.indexOf(">", content.indexOf("src=") + 5) - 3
			);

			blogArray.push(
				<a
					className={"blog-tile"}
					href={blogs[i].link}
					target="_blank"
					rel="nofollow noopener noreferrer"
				>
					<img
						className={"blog-tile-image"}
						src={imageURL}
						alt={"blog tile"}
					/>
					<div>
						<p className={"blog-title"}>{blogs[i].title}</p>
					</div>
				</a>
			);
		}
	} else {
		blogArray.push(
			<div className={"blog-tile-image-wrapper"}>
				<img
					className={"blog-tile-image"}
					src={placeholder}
					alt={"blog tile"}
				/>
				<div>
					<p className={"blog-title"}>Unable to load Archive</p>
				</div>
			</div>
		);
	}

	return (
		<>
			<HeroImage heroTitle={"BLOG ARCHIVES"} />
			<div id={"blog-archive-container"}>
				<div id={"blog-archive-header"}>Archived Blogs</div>
				<div id={"blog-archives"}>{blogArray}</div>
			</div>
			<Footer />
		</>
	);
}
