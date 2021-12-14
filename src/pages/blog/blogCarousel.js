import React, {useContext} from "react";
import {UniversalContext} from "../../App";
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./blog.scss";

/**
 * Renders blog carousel items
 * @returns {JSX.Element}
 * @constructor
 */
export default function BlogCarousel() {
	const context = useContext(UniversalContext);
	const blogs = context.blogArray.items;
	const setBlogDetails = context.setBlogDetails;
	let blogArray = [];

	function handleClick(blog) {
		setBlogDetails(blog);
	}

	if (blogs !== undefined) {
		let numberOfBlogs;
		if (blogs.length < 6) {
			numberOfBlogs = blogs.length;
		} else {
			numberOfBlogs = 6;
		}

		for (let i = 0; i < numberOfBlogs; i++) {
			let content = blogs[i]["content:encoded"];
			content = content.toString();
			// Parse image url from blog content
			let imageURL = content.substring(
				content.indexOf("src=") + 5,
				content.indexOf(">", content.indexOf("src=") + 5) - 3
			);

			blogArray.push(
				<Carousel.Item>
					<div className={"blog-carousel-image-wrapper"}>
						<Link to={"/blogdetails"} className={"blog-element-wrapper"}>
							<a
								onClick={() => handleClick(content)}
								rel="nofollow noopener noreferrer"
							>
								<img className={"d-block"} src={imageURL} alt={"carousel slide"}/>
							</a>
						</Link>
						<Carousel.Caption>
							<p className={"blog-title"}>{blogs[i].title}</p>
						</Carousel.Caption>
					</div>
				</Carousel.Item>
			);
		}
	}

	return (
		<>
			<Carousel>{blogArray}</Carousel>
		</>
	);
}
