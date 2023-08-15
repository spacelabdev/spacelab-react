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
	const [activeTeam, setActiveTeam] = useState("frontend");
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
				active={`${activeTeam === "frontend" ? "" : "hidden"}`}
				title={frontEndTitle}
				members={frontEndMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${activeTeam === "backend" ? "" : "hidden"}`}
				title={backEndTitle}
				members={backEndMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${activeTeam === "webgl" ? "" : "hidden"}`}
				title={webGLTitle}
				members={webGLMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${activeTeam === "designers" ? "" : "hidden"}`}
				title={uxTitle}
				members={uxMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${activeTeam === "datascience" ? "" : "hidden"}`}
				title={dataScienceTitle}
				members={dataScienceMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${activeTeam === "writers" ? "" : "hidden"}`}
				title={writersTitle}
				members={writersMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${activeTeam === "board" ? "" : "hidden"}`}
				title={boardTitle}
				members={boardMembers}
				status={status}
				showAll={showAll}
				showCurrent={showCurrent}
				showPast={showPast}
			/>
			<SliderComponent
				active={`${activeTeam === "administration" ? "" : "hidden"}`}
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
