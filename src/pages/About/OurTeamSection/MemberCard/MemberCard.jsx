import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";
import {FaBriefcase, FaLinkedin} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Astronauts from "../../../../assets/ju-guan-D-jLxBtEwaA-unsplash.jpg";
import "./memberCard.scss";

/**
 * Renders a member card that displays team member's image, name and title, as well as a hover card with short
 * bio/quote, and links to github, portfolio site, and linkedIn if they so choose.
 * @returns {JSX.Element}
 * @constructor
 * @param memberObject {object}
 */
const MemberCard = (memberObject) => {
	const member = memberObject.member;
	let image = member.image;
	let hasGitHub = false;
	let hasPortfolio = false;
	let hasLinkedIn = false;

	// State to track if the details container should be displayed
	const [showDetails, setShowDetails] = useState(false);

	useEffect(() => {
		if (showDetails) {
		  // Prevent scrolling open
		  document.body.style.overflow = "hidden";
		} else {
		  // Re-enable scrolling when closed
		  document.body.style.overflow = "auto";
		}
	}, [showDetails]);

	if (!member.image) {
		image = Astronauts;
	}

	// Show links if present
	if (member.gitHub) {
		hasGitHub = true;
	}
	if (member.portfolio) {
		hasPortfolio = true;
	}
	if (member.linkedIn) {
		hasLinkedIn = true;
	}

	// Function to handle the card click event
	const handleCardClick = () => {
		if (!showDetails) {
			setShowDetails(true);
		}
	};

	// function to close card
	const handleCloseClick = () => {
		setShowDetails(false);
	};

	return (
		<div className="member-card">
			<img src={image} alt={`${member.fullName}.png`} onClick={handleCardClick}/>
			<div className="member-card-text-container">
				<p className="member-card-text-name">{member.fullName}</p>
				<p className="member-card-text-title">{member.title}</p>
			</div>
			{/* overlay layer */}
			{showDetails && (<div className="overlay" onClick={handleCloseClick}></div>)}
			<div className={`member-card-details-container ${showDetails ? "show" : ""}`}>
				<img src={image} alt={`${member.fullName}.png`} className="member-card-details-image" />
				<div className="member-card-right-side">
					<IconContext.Provider value={{ color: "var(--text)", size: "2rem" }} >
					<div className="member-card-close" onClick={handleCloseClick}> <MdClose /> </div>
					</IconContext.Provider>
					<p className="member-card-text-name">{member.fullName}</p>
					<p className="member-card-text-title">{member.title}</p>
					<div className= "quote-container">
						<p className="member-card-text-quote">{member.bioQuote}</p>
					</div>
					<div className={"member-card-link-container"}>
						<IconContext.Provider
							value={{ color: "var(--text)", size: "2rem" }}
						>
							<a
								className={`member-card-github ${
									hasLinkedIn ? "" : "hidden"
								}`}
								href={member.linkedIn}
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedin />
							</a>
							<a
								className={`member-card-github ${
									hasGitHub ? "" : "hidden"
								}`}
								href={member.gitHub}
								target="_blank"
								rel="noreferrer"
							>
								<AiOutlineGithub />
							</a>
							<a
								className={`member-card-github ${
									hasPortfolio ? "" : "hidden"
								}`}
								href={member.portfolio}
								target="_blank"
								rel="noreferrer"
							>
								<FaBriefcase />
							</a>

						</IconContext.Provider>
					</div>
				</div>
			</div>
		</div>
	);
};


MemberCard.propTypes = {
	/**
	 * Object containing member details to be rendered
	 */
	memberObject: PropTypes.object,
};

MemberCard.defaultProps = {
	memberObject: {},
};

export default MemberCard;
