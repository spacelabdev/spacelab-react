import React, {useContext, useState} from "react";
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

	// TODO: Not sure what you are trying to do with this?
	const [open, setOpen] = useState(false)
	const [article, setArticle] = useState([])

	// TODO: Remove this array. It lives in the helperFunction
	const emptyElements = [
	  "<area",
	  "<base",
	  "<br",
	  "<col",
	  "<embed",
	  "<hr",
	  "<img",
	  "<input",
	  "<keygen",
	  "<link",
	  "<meta",
	  "<param",
	  "<source",
	  "<track",
	  "<wbr"
	]

	let strEnd = ""

	// TODO: not sure what you are trying to do here. What you probably want to do, is have this function route
	//  the user to a different page within Spacelab, and set the html string as state in App.js.
	//  You could also potentially consider using session storage?
	//  The new page would then call the parsing function from helperFunction and render the blog.
	function handleClick(blog) {
		setOpen(!open)
		setArticle(blog)
	}

	if (blogs !== undefined) {
		for (let i = 0; i < blogs.length; i++) {
			let content = blogs[i]['content:encoded'];
			content = content.toString();

			let imageURL = content.substring(content.indexOf("src=") + 5,
				content.indexOf(">", content.indexOf("src=") + 5) - 3);

			content = searchForEmptyElement(content)

			blogArray.push(
				<a className={"blog-tile"}
				   // href={blogs[i].link}
				   onClick={() => handleClick(content)}
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

	// TODO: Remove these and call from the helper function where necessary.
	/********************************************************************************
	Fuction to search for emptyElement                                             */

	function searchForEmptyElement(originalStr){
	  let str = originalStr
	  let updatedStr = ""
	  let finalString = ""

	   for(let i = 0; i < emptyElements.length; i++){
	    let beforeElement = ""
	    let afterElement = ""
	    let result = emptyElements.some(w => str.includes(emptyElements[i]))
	    let index = originalStr.indexOf(emptyElements[i])

	    if(result === true){
	      let foundElement = emptyElements[i]

	      while (index !== -1) {
	        let newIndex = str.indexOf(foundElement)
	        afterElement =  str.substring(newIndex)
	        beforeElement = str.substring(0, newIndex)
	        afterElement = isTagClosed(afterElement)
	        index = originalStr.indexOf(emptyElements[i], index + 1)
	        updatedStr = updatedStr + beforeElement + afterElement
	        str = strEnd
	      }
	      finalString = updatedStr + str
	      str = finalString
	      updatedStr = ""
	    }
	  }
	  return finalString
	}

	/*	Fuction to determine if element is closed*/
	function isTagClosed(elementStr){
	  let [start, ...end] = elementStr.split('>');
	  strEnd = end.join(">");

	  if(start[start.length - 1] !== "/"){
	    return `${start}/>`
	  } else {
	    return `${start}>`
	  }
	}
	/********************************************************************************/

	return (
		<>
			<HeroImage/>

			{!open &&
				<div id={"blog-archive-container"}>
					<div id={"blog-archive-header"}>Archived Blogs</div>
					<div id={"blog-archives"}>{blogArray}</div>
				</div>
			}

			{ open &&
				<>
					{article}
				</>
			}
			<Footer/>
		</>
	);
};
