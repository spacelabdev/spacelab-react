import React from "react";
import PropTypes from "prop-types";
import {IconContext} from "react-icons";
import {AiOutlineGithub, AiOutlineGlobal, AiOutlineLinkedin} from "react-icons/ai";
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

	return (
		<div className="member-card">
			<img src={image} alt={`${member.fullName}.png`}/>
			<div className="member-card-text-container">
				<p className="member-card-text-name">{member.fullName}</p>
				<p className="member-card-text-title">{member.title}</p>
			</div>
			<div className={"member-card-details-container"}>
				<p className="member-card-text-name">{member.fullName}</p>
				<p className="member-card-text-title">{member.title}</p>
				<p className="member-card-text-quote">{member.bioQuote}</p>
				<div className={"member-card-link-container"}>
					<IconContext.Provider
						value={{color: "D9D9D9", size: "2rem"}}
					>
						<a
							className={`member-card-github ${hasGitHub ? "" : "hidden"}`}
							href={member.gitHub}
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineGithub/>
						</a>
						<a
							className={`member-card-github ${hasPortfolio ? "" : "hidden"}`}
							href={member.portfolio}
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineGlobal/>
						</a>
						<a
							className={`member-card-github ${hasLinkedIn ? "" : "hidden"}`}
							href={member.linkedIn}
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineLinkedin/>
						</a>
					</IconContext.Provider>
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
}

export default MemberCard;
