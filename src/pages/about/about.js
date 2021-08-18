import React from "react";
import './about.scss';
import HeroImage from "../../components/heroImage/heroImage";
import ContactForm from "../../components/contactForm/contactForm";
import Footer from "../../components/footer/footer";
import Rocket from "../../assets/aboutAssets/rocket.svg"
import Planet from "../../assets/aboutAssets/planet.svg"
import Planet_Rings from "../../assets/aboutAssets/planet_rings.svg"
import { teamImages, contributorImages } from "./teamData";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function About() {
	return (
		<>
			<HeroImage/>
			<section id="about-mission-statement-container">
				<div className="inner-section-two">
					<div className="about-mission-segment-container">
						<div className={"about-mission-image-wrapper"}>
							<img className={"about-mission-image"} src={Rocket} alt={"Space Shuttle"}/>
						</div>
						<div className={"about-mission-content"}>
							<h1 className="about-mission-header">Our Mission</h1>
							<p>
								Spacelab is building the next generation fo leaders in outer-space-focused science and
								technology, drawing from diverse, underrepresented communities, including women,
								members of the LGBTQ+ community, and people of color, and creating paid fellowships,
								internships, and scholarship opportunities, as well as debt relief.
							</p>
						</div>
					</div>
					<div className="about-mission-segment-container">
						<div className={"about-mission-content"}>
							<h1 className="about-mission-header">Our Values</h1>
							<p>
								We value the voices of those too often talked over and underappreciated because we
								firmly believe that a diverse group of people approaching a problem will arrive at
								a more creative and unique solution: a solution that incorporates each individual's
								perspectives, values, and needs. We aim to operate from a starting point of social
								justice, equity, and inclusion.
							</p>
						</div>
						<div className={"about-mission-image-wrapper"}>
							<img className={"about-mission-image"} src={Planet} alt={"Planet"}/>
						</div>
					</div>
					<div className="about-mission-segment-container">
						<div className={"about-mission-image-wrapper"}>
							<img className={"about-mission-image"} src={Planet_Rings} alt={"Planet"}/>
						</div>
						<div className={"about-mission-content"}>
							<h1 className="about-mission-header">Our Vision</h1>
							<p>
								Our vision of success includes a continuous stream of space-related projects built
								by aspiring tech professionals and invented by the leaders of tomorrow. Through
								funding these big ideas and mentoring the talent of the future, our goal is to see
								women, people of color, and people from the LGBTQ+ community at the helm of the 500
								largest companies in the United States by 2030.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="about-team-container">
				<h1 id="main-header">We're Space Lab</h1>
				<h4> Meet the team!</h4>
				<div className="team-picture-div">
					{teamImages.map(team =>
						<div className="team-card">
							<img className="team-picture" src={team.image} alt={team.fullName}/>
							<p className="team-name" >{team.fullName}</p>
							<p className="team-title" >{team.title}</p>
						</div>
					)}
				</div>

				<h1 id="contributers-header">Addtional Contributors</h1>
			    <div className="team-picture-div">
					{contributorImages.map(team =>
						<div className="team-card">
							<img className="team-picture" src={team.image} alt={team.fullName}/>
							<p className="team-name" >{team.fullName}</p>
							<p className="team-title" >{team.title}</p>
						</div>
					)}
				</div>
			</section>

			<section id="about-faq-container">
				<div className="section-three-inner-div">
					<div className="left-side-section-three">
						<div id="faq">FAQ</div>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Vestibulum ligula nisi, tristique ut massa.
						</div>
					</div>
					<div className="right-side-section-three">
						<div className="right-side-nested-div">
							<div className="question-div">
								<p>Extroplanet Question</p>
								<p>Habitable Zone</p>
								<p>Solar System</p>
								<p>Space Lab Question</p>
							</div>
							<div className="answer-div">
								<p>Answer</p>
								<p>Answer</p>
								<p>Answer</p>
								<p>Answer</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<ContactForm/>
			<Footer/>
		</>
);
};