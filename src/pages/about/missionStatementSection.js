import React from "react";
import Rocket from "../../assets/aboutAssets/ridingRocket.png"
import Planet from "../../assets/aboutAssets/bro.png"
import Explorer from "../../assets/aboutAssets/Top.png"

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function MissionStatement() {
	return (
		<section id="about-mission-statement-container">
			<div className="inner-section-two">
				<div className="about-mission-segment-container">
					<div className={"about-mission-image-wrapper"}>
						<img className={"about-mission-image"} src={Planet} alt={"Planet"}/>
					</div>
					<div className={"about-mission-content"}>
						<h1 className="about-mission-header">Our Values</h1>
						<p>
							We value the voices of those too often talked over and under appreciated, because we firmly
							believe that a diverse group of people approaching a problem will arrive at a more creative
							and unique solution; a solution that incorporates each individual's perspectives, values,
							and needs. We aim to operate from a starting point of equity, inclusion and belonging.
						</p>
					</div>
				</div>
				<div className="about-mission-segment-container">
					<div className={"about-mission-image-wrapper"}>
						<img className={"about-mission-image"} src={Rocket} alt={"Space Shuttle"}/>
					</div>
					<div className={"about-mission-content"}>
						<h1 className="about-mission-header">Our Mission</h1>
						<p>
							Spacelab is building the next generation of leaders in outer-space-focused science and
							technology, drawing from diverse, underrepresented communities, including women, members of
							the LGBTQ+ community, and people of color, and creating paid fellowships, internships, and
							scholarship opportunities, as well as debt relief.
						</p>
					</div>
				</div>
				<div className="about-mission-segment-container">
					<div className={"about-mission-image-wrapper"}>
						<img className={"about-mission-image"} src={Explorer} alt={"Planet"}/>
					</div>
					<div className={"about-mission-content"}>
						<h1 className="about-mission-header">Our Vision</h1>
						<p>
							Our vision of success includes a continuous stream of space-related projects built by
							aspiring tech professionals and invented by the leaders of tomorrow. Through funding these
							big ideas and mentoring the talent of the future, our goal is to build momentum toward
							women, people of color, and people from the LGBTQ+ community holding the helm of the 500
							largest companies in the United States.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
