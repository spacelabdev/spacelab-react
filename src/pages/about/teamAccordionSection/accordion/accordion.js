import React, {useState, useEffect} from "react";
import MemberCard from "../memberCard/memberCard";
import "./accordion.scss";
import PropTypes from "prop-types";

/**
 * Creates a member card that displays team member's image, name and title
 * {title: (string), members: [{image: (string), fullName: (string), title: (string)}]}
 * @param title {string}
 * @param members {array}
 * @param loadOpen {boolean} State. Boolean should not be directly passed. Instead pass firstLoad
 * @param setLoadOpen {function} State. Pass setFirstLoad
 * @returns {JSX.Element}
 * @constructor
 */
const Accordion = ({title, members, loadOpen, setLoadOpen}) => {
	const [open, setOpen] = useState(false);
	const [arrow, setArrow] = useState(false);

	const handleAccordion = () => {
		setOpen(!open);
		setArrow(!arrow);
		if (loadOpen) setLoadOpen(false);
	};

	useEffect(() => {
		if (loadOpen) {
			setOpen(true);
			setArrow(true);
		}
	}, [loadOpen]);

	const openAccordion = open ? "accordion-open" : "";
	const openContainer = open ? "container-open" : "";
	let flipArrow = arrow ? "icon-flip" : "";
	if (loadOpen) {
		flipArrow = "icon-flip";
	}

	return (
		<div className={`accordion-container ${openContainer}`}>
			<div className="accordion-container-heading">
				<div className="accordion-container-heading-text-container">{title}</div>
				<div
					className={`accordion-container-heading-icon ${flipArrow}`}
					onClick={handleAccordion}
				>
					▲
				</div>
			</div>
			<div className={`accordion-container-content ${openAccordion}`}>
				{members.map((member) => (
					<MemberCard key={`${title}-${member.fullName}`} member={member}/>
				))}
			</div>
		</div>
	);
};

Accordion.propTypes = {
	/**
	 * Title of the accordion group. ex: Team Leads, etc.
	 */
	title: PropTypes.string,
	/**
	 * Array containing information to be populated in the accordion.
	 * members: [{image: (string), fullName: (string), title: (string)}]
	 */
	members: PropTypes.array,
	/**
	 * Boolean determining if the accordion should already be open on page load
	 */
	loadOpen: PropTypes.bool,
	/**
	 * Function setting state for accordion sections that should be open on page load.
	 */
	setLoadOpen: PropTypes.func,
};

Accordion.defaultProps = {
	title: null,
	members: null,
	loadOpen: false,
	setLoadOpen: null,
};

export default Accordion;
