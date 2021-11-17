import React from "react";
import Accordion from "../../components/accordion/accordion";
import { teamImages, contributorImages } from "./aboutHelper";

/**
 * @returns {JSX.Element}
 * @constructor
 */

export default function Team() {
    return (
        <section id="about-team-container">
            <h1 id="main-header">We're Space Lab</h1>
            <h4> Meet the team!</h4>
            <Accordion />
            {/* <div className="team-picture-div">
            {teamImages.map(team =>
                <div className="team-card">
                    <img className="team-picture" src={team.image} alt={team.fullName}/>
                    <p className="team-name" >{team.fullName}</p>
                    <p className="team-title" >{team.title}</p>
                </div>
            )}
        </div> */}

            {/* <h1 id="contributers-header">Addtional Contributors</h1>
        <div className="team-picture-div">
            {contributorImages.map(team =>
                <div className="team-card">
                    <img className="team-picture" src={team.image} alt={team.fullName}/>
                    <p className="team-name" >{team.fullName}</p>
                    <p className="team-title" >{team.title}</p>
                </div>
            )}
        </div> */}
        </section>
    );
}
