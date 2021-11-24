import React, {useState} from "react";
import Accordion from "../../components/accordion/accordion";
import {
    boardOFDirectors,
    teamLeads,
    uxDesigners,
    frontEnd,
    dataScience,
    webGL,
    writers,
} from "./aboutHelper";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Team() {
    const { title: boardTitle, members: boardMembers } = boardOFDirectors;
    const { title: teamLeadTitle, members: teamLeadMembers } = teamLeads;
    const { title: uxTitle, members: uxMembers } = uxDesigners;
    const { title: frontEndTitle, members: frontEndMembers } = frontEnd;
    const { title: dataScienceTitle, members: dataScienceMembers } =
        dataScience;
    const { title: webGLTitle, members: webGLMembers } = webGL;
    const { title: writersTitle, members: writersMembers } = writers;

		const [firstLoad, setFirstLoad] = useState(true)

    return (
        <section id="about-team-container">
            <h1 id="main-header">We're Space Lab</h1>
            <h4> Meet the team!</h4>
            <Accordion title={boardTitle} members={boardMembers} firstLoad={firstLoad} setFirstLoad={setFirstLoad}/>
            <Accordion title={teamLeadTitle} members={teamLeadMembers} />
            <Accordion title={frontEndTitle} members={frontEndMembers} />
            <Accordion title={dataScienceTitle} members={dataScienceMembers} />
            <Accordion title={webGLTitle} members={webGLMembers} />
            <Accordion title={uxTitle} members={uxMembers} />
            <Accordion title={writersTitle} members={writersMembers} />
        </section>
    );
}
