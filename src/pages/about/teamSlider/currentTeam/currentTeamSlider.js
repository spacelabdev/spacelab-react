import React, {useState} from "react";
import SliderNav from "../sliderNav/sliderNav";
import SliderComponent from "../SliderComponent/sliderComponent";
import './currentTeamSlider.scss';
import {
	boardOfDirectors,
	teamLeads,
	uxDesigners,
	frontEnd,
	backEnd,
	dataScience,
	webGL,
	writers,
	teamSliderNavLinks,
} from "../../aboutHelper";

export default function CurrentTeamSlider({toggle}) {
	const [activeTeam, setActiveTeam] = useState('frontend');

	// Nav link data
	const {currentTeams: teamLinks} = teamSliderNavLinks;
	// Member card data
	const {title: boardTitle, members: boardMembers} = boardOfDirectors;
	const {title: teamLeadTitle, members: teamLeadMembers} = teamLeads;
	const {title: uxTitle, members: uxMembers} = uxDesigners;
	const {title: frontEndTitle, members: frontEndMembers} = frontEnd;
	const {title: backEndTitle, members: backEndMembers} = backEnd;
	const {title: dataScienceTitle, members: dataScienceMembers} = dataScience;
	const {title: webGLTitle, members: webGLMembers} = webGL;
	const {title: writersTitle, members: writersMembers} = writers;

	return (
		<div className={`team-slider-component-container ${toggle}`}>
			<SliderNav navObjects={teamLinks} activeSlide={activeTeam} setActive={setActiveTeam}/>
			<SliderComponent active={`${activeTeam === 'frontend' ? '' : 'hidden'}`}
			                 title={frontEndTitle}
			                 members={frontEndMembers}
			/>
			<SliderComponent active={`${activeTeam === 'backend' ? '' : 'hidden'}`}
			                 title={backEndTitle}
			                 members={backEndMembers}
			/>
			<SliderComponent active={`${activeTeam === 'webgl' ? '' : 'hidden'}`}
			                 title={webGLTitle}
			                 members={webGLMembers}
			/>
			<SliderComponent active={`${activeTeam === 'designers' ? '' : 'hidden'}`}
			                 title={uxTitle}
			                 members={uxMembers}
			/>
			<SliderComponent active={`${activeTeam === 'datascience' ? '' : 'hidden'}`}
			                 title={dataScienceTitle}
			                 members={dataScienceMembers}
			/>
			<SliderComponent active={`${activeTeam === 'writers' ? '' : 'hidden'}`}
			                 title={writersTitle}
			                 members={writersMembers}
			/>
			<SliderComponent active={`${activeTeam === 'leads' ? '' : 'hidden'}`}
			                 title={teamLeadTitle}
			                 members={teamLeadMembers}
			/>
			<SliderComponent active={`${activeTeam === 'board' ? '' : 'hidden'}`}
			                 title={boardTitle}
			                 members={boardMembers}
			/>
		</div>
	);
};
