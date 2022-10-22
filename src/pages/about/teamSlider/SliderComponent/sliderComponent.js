import React from "react";
import MemberCard from "../memberCard/memberCard";
import PropTypes from "prop-types";
import './sliderComponent.scss';

const SliderComponent = ({title, members, active}) => {

	return (
		<div className={`team-slider-container ${active}`}>
			{members.map((member) => (
				<MemberCard key={`${title}-${member.fullName}`} member={member}/>
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
