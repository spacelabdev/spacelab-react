import React, { useState } from "react";
import SliderNav from "../SliderNav/SliderNav";
import SliderComponent from "../SliderComponent/SliderComponent";
import "./currentTeamSlider.scss";
import {
	boardOfDirectors,
	uxDesigners,
	frontEnd,
	backEnd,
	dataScience,
	webGL,
	writers,
	administration,
	teamSliderNavLinks,
} from "../../aboutHelper";

/**
 * Renders current team slider
 * @param toggle
 * @returns {JSX.Element}
 * @constructor
 */
export default function CurrentTeamSlider({ toggle }) {
	const [activeTeam, setActiveTeam] = useState("All Teams");
	const [status, setStatus] = useState("current");

	const [showAll, setShowAll] = useState(false);
	const [showCurrent, setShowCurrent] = useState(true);
	const [showPast, setShowPast] = useState(false);

	// Nav link data
	const { currentTeams: teamLinks } = teamSliderNavLinks;
	// Member card data
	const { title: boardTitle, members: boardMembers } = boardOfDirectors;
	const { title: uxTitle, members: uxMembers } = uxDesigners;
	const { title: frontEndTitle, members: frontEndMembers } = frontEnd;
	const { title: backEndTitle, members: backEndMembers } = backEnd;
	const { title: dataScienceTitle, members: dataScienceMembers } =
		dataScience;
	const { title: webGLTitle, members: webGLMembers } = webGL;
	const { title: writersTitle, members: writersMembers } = writers;
	const { title: administrationTitle, members: administrationMembers } =
		administration;
	const allMembers = [
		...boardMembers,
		...uxMembers,
		...frontEndMembers,
		...backEndMembers,
		...dataScienceMembers,
		...webGLMembers,
		...writersMembers,
		...administrationMembers,
	];

	return (
		<div className={`team-slider-component-container ${toggle}`}>
			<SliderNav
				navObjects={teamLinks}
				activeSlide={activeTeam}
				setActive={setActiveTeam}
				status={status}
				setStatus={setStatus}
				setShowAll={setShowAll}
				setShowCurrent={setShowCurrent}
				setShowPast={setShowPast}
			/>
			<SliderComponent
				active={`${activeTeam === "All Teams" ? "" : "hidden"}`}
				title={"All Teams"}
				members={allMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${
					activeTeam === "Frontend Developers" ? "" : "hidden"
				}`}
				title={frontEndTitle}
				members={frontEndMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${
					activeTeam === "Backend Developers" ? "" : "hidden"
				}`}
				title={backEndTitle}
				members={backEndMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${activeTeam === "3D Developers" ? "" : "hidden"}`}
				title={webGLTitle}
				members={webGLMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${activeTeam === "UX Designers" ? "" : "hidden"}`}
				title={uxTitle}
				members={uxMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${activeTeam === "Data Scientists" ? "" : "hidden"}`}
				title={dataScienceTitle}
				members={dataScienceMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${activeTeam === "Writers" ? "" : "hidden"}`}
				title={writersTitle}
				members={writersMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${activeTeam === "Board" ? "" : "hidden"}`}
				title={boardTitle}
				members={boardMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${activeTeam === "Administration" ? "" : "hidden"}`}
				title={administrationTitle}
				members={administrationMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
		</div>
	);
}
