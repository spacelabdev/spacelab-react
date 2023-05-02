import React, { useContext, useState } from "react";
import { UniversalContext } from "../../App";
import "./blogArchives.scss";
import placeholder from "../../assets/generalAssets/img_placeholder.png";
import BlogArchivesCard from "../blogArchivesCard/blogArchivesCard";

/**
 * Returns gallery of all blog posts
 * @returns {JSX.Element}
 * @constructor
 */
export default function BlogArchives() {
	const context = useContext(UniversalContext);
	const [showAll, setShowAll] = useState(false);

	const blogs =
		context.blogArray && context.blogArray.items
			? context.blogArray.items
			: [];

	// calculate the number of cards to show
	const numberToShow = showAll ? blogs.length : 6;

	const toggleShowAll = function toggleShowAll() {
		setShowAll(!showAll);
	};

	return (
		<div id={"blog-archive-container"}>
			<div id={"blog-archive-header"}>Archived Blogs</div>
			<div id={"blog-archives"}>
				{blogs ? (
					blogs
						.slice(0, numberToShow)
						.map((blog) => (
							<BlogArchivesCard blog={blog} key={blog.link} />
						))
				) : (
					<div className={"blog-tile-image-wrapper"}>
						<img
							className={"blog-tile-image"}
							src={placeholder}
							alt={"blog tile"}
						/>
						<div>
							<p className={"blog-title"}>
								Unable to load Archive
							</p>
						</div>
					</div>
				)}
			</div>
			<div className="button-container">
				{blogs.length > 6 && (
					<button onClick={toggleShowAll}>
						{showAll
							? "Hide Full Blog Archives"
							: "View Full Blog Archives"}
					</button>
				)}
			</div>
		</div>
	);
}
