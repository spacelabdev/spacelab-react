import React from "react";
import Accordion from "../../components/accordion/accordion";

import { boardOFDirectors, teamLeads, uxDesigners, frontEnd, dataScience, webGL, writers } from "../../pages/about/aboutHelper";

/**
 * @returns {JSX.Element}
 * @constructor
 */

export default function Team() {

	const {title:boardTitle, members:boardMembers} = boardOFDirectors;
	const {title:teamLeadTitle, members:teamLeadmembers} = teamLeads;
	const {title:uxTitle, members:uxMembers} = uxDesigners;
	const {title:frontEndTitle, members:frontEndMembers} = frontEnd;
	const {title:dataScienceTitle, members:dataScienceMembers} = dataScience;
	const {title:webGLTitle, members:webGLMembers} = webGL;
	const {title:writersTitle, members:writersMembers} = writers;

	const boardOFDirectorsAccordion = <Accordion title={boardTitle} members={boardMembers}/>
	const teamLeadAccordion = <Accordion title={teamLeadTitle} members={teamLeadmembers}/>
	const uxDesignersAccordion = <Accordion title={uxTitle} members={uxMembers}/>
	const frontEndAccordion = <Accordion title={frontEndTitle} members={frontEndMembers}/>
	const dataScienceAccordion = <Accordion title={dataScienceTitle} members={dataScienceMembers}/>
	const webGLAccordion = <Accordion title={webGLTitle} members={webGLMembers}/>
	const writersAccordion = <Accordion title={writersTitle} members={writersMembers}/>

    return (
        <section id="about-team-container">
            <h1 id="main-header">We're Space Lab</h1>
            <h4> Meet the team!</h4>
			{boardOFDirectorsAccordion}
            {teamLeadAccordion}
			{frontEndAccordion}
			{dataScienceAccordion}
			{webGLAccordion}
			{uxDesignersAccordion}
			{writersAccordion}
        </section>
    );
}
