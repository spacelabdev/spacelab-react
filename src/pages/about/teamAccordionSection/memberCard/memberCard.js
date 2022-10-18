import React from "react";
import "./memberCard.scss";
import PropTypes from "prop-types";
import {IconContext} from "react-icons";
import {AiOutlineGithub, AiOutlineGlobal, AiOutlineLinkedin} from "react-icons/ai";

/**
 * Renders a member card that displays team member's image, name and title
 * @returns {JSX.Element}
 * @constructor
 * @param memberObject {object}
 */
const MemberCard = (memberObject) => {
	const member = memberObject.member;

	return (
		<div className="member-card">
			<img src={member.image} alt={`${member.fullName}.png`}/>
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
							href={member.gitHub}
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineGithub/>
						</a>
						<a
							href={member.portfolio}
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineGlobal/>
						</a>
						<a
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
