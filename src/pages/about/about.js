import React from "react";
import './about.scss';
import HeroImage from "../../components/heroImage/heroImage";
import ContactForm from "../../components/contactForm/contactForm";
import Footer from "../../components/footer/footer";
import Rocket from "../../assets/aboutAssets/rocket.svg"
import Planet from "../../assets/aboutAssets/planet.svg"
import Planet_Rings from "../../assets/aboutAssets/planet_rings.svg"

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function About() {
	const teamImages = [{image:"https://res.cloudinary.com/spacelabdev/image/upload/c_scale,w_200/v1629131500/team_pics/raysean_dn1vww.png", fullName: "Raysean Williams", title: "3D Graphics Developer"},
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/c_scale,w_200/v1629131440/team_pics/matt_ksbosg.jpg", fullName: "Matt Paterson", title: "Data Science Project Manager| Machine Learning Engineer"},
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629131393/team_pics/anna_kc4hqb.jpg", fullName:"Anna Chowattanakul", title:"Front End Developer | Project Manager"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629131368/team_pics/ricky_fdzb1y.png", fullName:"Ricky Rong", title:"Machine Learning Engineer"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629131338/team_pics/uma_n6hcdv.jpg", fullName:"Uma Muthu", title:"Product Designer"},
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629131297/team_pics/Christy_kn3wxm.jpg", fullName:"Christy Min", title:"UX Designer"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130990/team_pics/Ollie_pic_yabvpi.png", fullName:"Ollie Jackson", title:"Software Engineer"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130971/team_pics/Megan_ncesok.png", fullName:"Meghan Slan", title: "DEIB Specialist"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/deen_ex8fxt.png", fullName:"Deen Haque", title: "Full Stack Software Engineer"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/yumi_j5x47l.png", fullName:"Yumi Jeon", title:"UX Designer"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/mamadou_mtnlfc.png", fullName:"Mamadou Diallo", title: "3D Graphics Developer"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130969/team_pics/angelines_ygdgfi.png", fullName:"Angelines Yaport-Garcia", title:"Full Stack Software Engineer"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130968/team_pics/alex_s0g0a6.png", fullName:"Alex Simon", title:"Data Scientist | Staff Writer"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130966/team_pics/robert_oggyg8.png", fullName:"Robert Sato", title: "Data Scientist | Machine Learning Engineer"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130966/team_pics/brandon_ihzbvu.png", fullName:"Brandon Cantello", title:"Software Developer"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130966/team_pics/kat_wzzzo3.png", fullName:"Kat Hackethal", title:"Software Engineer"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/jon_cxasx9.png", fullName:"Jon Zivku", title:"Software Engineer"},
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/subin_p8gjt5.png", fullName:"Subin Shin", title:"UI/UX Designer"}, 
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/Phaly_ieng0k.png", fullName:"Phally Bell", title:"UX Research Project Manager"},
	{image:"https://res.cloudinary.com/spacelabdev/image/upload/v1629130963/team_pics/charlie_ibjvgs.png", fullName:"Charlie Arboleda", title:"Software Engineer"}]

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