import React, {useState} from "react";
import Accordion from "./teamAccordionSection/accordion/accordion";
import {
	boardOFDirectors,
	teamLeads,
	uxDesigners,
	frontEnd,
	backEnd,
	dataScience,
	webGL,
	writers,
	december2021Cohort,
	additionalContributors,
} from "./aboutHelper";

/**
 * Renders Spacelab team section with accordion dropdown menus for each Spacelab team.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Team() {
	const {title: boardTitle, members: boardMembers} = boardOFDirectors;
	const {title: teamLeadTitle, members: teamLeadMembers} = teamLeads;
	const {title: uxTitle, members: uxMembers} = uxDesigners;
	const {title: frontEndTitle, members: frontEndMembers} = frontEnd;
	const {title: backEndTitle, members: backEndMembers} = backEnd;
	const {title: dataScienceTitle, members: dataScienceMembers} = dataScience;
	const {title: webGLTitle, members: webGLMembers} = webGL;
	const {title: writersTitle, members: writersMembers} = writers;
	const {title: december2021Title, members: december2021Members} = december2021Cohort;
	const {title: additionalContributorTitle, members: additionalContributorMembers} = additionalContributors;
	const [loadOpen, setLoadOpen] = useState(true);

	return (
		<section id="about-team-container">
			<h1 id="main-header">We're Space Lab</h1>
			<h4> Meet the team!</h4>
			<Accordion title={boardTitle} members={boardMembers} loadOpen={loadOpen} setLoadOpen={setLoadOpen}/>
			<Accordion title={teamLeadTitle} members={teamLeadMembers}/>
			<Accordion title={frontEndTitle} members={frontEndMembers}/>
			<Accordion title={backEndTitle} members={backEndMembers}/>
			<Accordion title={dataScienceTitle} members={dataScienceMembers}/>
			<Accordion title={webGLTitle} members={webGLMembers}/>
			<Accordion title={uxTitle} members={uxMembers}/>
			<Accordion title={writersTitle} members={writersMembers}/>
			<Accordion title={december2021Title} members={december2021Members}/>
			<Accordion title={additionalContributorTitle} members={additionalContributorMembers}/>
		</section>
	);
}
