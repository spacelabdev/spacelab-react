import React, { useState } from "react";
import PropTypes from "prop-types";
import collapseIcon from "../../assets/componentAssets/collapseIcon.svg";
import expandIcon from "../../assets/componentAssets/expandIcon.svg";
import './collapsibleSection.scss';

// const barCN = cntl`
//   flex
//   justify-between
//   items-center
//   py-5
//   select-none
// `;
//
// const titleCN = cntl`
//   truncate
//   font-semibold
// `;

const CollapsibleSection = ({ title, defaultOpen, children, className }) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	const toggleOpen = () => setIsOpen(!isOpen);

	const onKeyDown = (event) => {
		if (event.key === "Enter") {
			toggleOpen();
		}
	};

	return (
		<div className={className}>
			<div
				className={"collapsible-container"}
				onClick={() => setIsOpen(!isOpen)}
				onKeyDown={onKeyDown}
				role="button"
				tabIndex={0}
			>
				<p className={"collapsible-title"}>{title}</p>
				<img
					src={isOpen ? collapseIcon : expandIcon}
					alt={isOpen ? "collapse" : "expand"}
				/>
			</div>
			{isOpen && children}
		</div>
	);
};

CollapsibleSection.propTypes = {
	/**
	 * the text to show on the collapsible section
	 */
	title: PropTypes.string,
	/**
	 * section should show child on default
	 */
	defaultOpen: PropTypes.bool,
	/**
	 * the react component to display when section is open
	 */
	children: PropTypes.element,
	/**
	 * optional className to add to the container
	 */
	className: PropTypes.string,
};

CollapsibleSection.defaultProps = {
	title: null,
	defaultOpen: false,
	children: null,
	className: null,
};

export default CollapsibleSection;
