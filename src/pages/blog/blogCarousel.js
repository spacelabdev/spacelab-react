import React, { useContext } from "react";
import { UniversalContext } from "../../App";
import { Carousel } from "react-bootstrap";
import "./blog.scss";
import placeholder from "../../assets/generalAssets/img_placeholder.png";

/**
 * Renders blog carousel items
 * @returns {JSX.Element}
 * @constructor
 */
export default function BlogCarousel() {
	const context = useContext(UniversalContext);
	const blogs = context.blogArray.items;
	let blogArray = [];

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
				<Carousel.Item key={blogs[i].title}>
					<div className={"blog-carousel-image-wrapper"}>
						<a
							className={"blog-element-wrapper"}
							href={blogs[i].link}
							target="_blank"
							rel="nofollow noopener noreferrer"
						>
							<img
								className={"d-block"}
								src={imageURL}
								alt={"carousel slide"}
							/>
						</a>
						<Carousel.Caption>
							<p className={"blog-title"}>{blogs[i].title}</p>
						</Carousel.Caption>
					</div>
				</Carousel.Item>
			);
		}
	}else{
		blogArray.push(
			<Carousel.Item key={"Placeholder"}>
					<div className={"blog-carousel-image-wrapper"}>
							<img
								className={"d-block"}
								src={placeholder}
								alt={"Unable to load Blog"}
							/>
						<Carousel.Caption>
							<p className={"blog-title"}>Unable to load Blog Posts.</p>
						</Carousel.Caption>
					</div>
				</Carousel.Item>
		);
	}

	return (
		<>
			<Carousel>{blogArray}</Carousel>
		</>
	);
};
