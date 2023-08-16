import React from "react";
import MemberCard from "../MemberCard/MemberCard";
import PropTypes from "prop-types";
import "./sliderComponent.scss";

/**
 * Builds slider component. Passes data to MemberCard component and renders what is returned.
 * @param title
 * @param members
 * @param active
 * @returns {JSX.Element}
 * @constructor
 */
const SliderComponent = ({
	title,
	members,
	active,
	showAll,
	showCurrent,
	showPast,
}) => {
	let filteredMembers = [];

	if (showAll) {
		filteredMembers = members;
	} else if (showCurrent) {
		filteredMembers = members.filter(
			(member) => member.status === "current"
		);
	} else if (showPast) {
		filteredMembers = members.filter((member) => member.status === "past");
	}
	return (
		<div className={`team-slider-container ${active}`}>
			{filteredMembers.map((member, index) => (
				<MemberCard key={index} member={member} />
			))}
		</div>
	);
};

SliderComponent.propTypes = {
	/**
	 * Title of the slider group. ex: Team Leads, etc.
	 */
	title: PropTypes.string,
	/**
	 * Array containing information to be populated in the slider.
	 * members: [{image: (string), fullName: (string), title: (string)}]
	 */
	members: PropTypes.array,
};

SliderComponent.defaultProps = {
	title: null,
	members: null,
};

export default SliderComponent;
