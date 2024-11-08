import React from "react";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function MissionVisionValuesSection() {
	return (
		<>
			<h1 className="about-title">ABOUT</h1>
			<section className="mission-vision-values-container">
				<div className="mission-vision-values-card">
					<h3>Mission</h3>
					<p>
						Spacelab is building the next generation of 
						leaders in outer-space-focused science and 
						technology, drawing from diverse, 
						underrepresented communities, including the 
						intersectionality of women, members of the 
						LGBTQ+ community, and people of color, and 
						creating paid fellowships, internships, and 
						scholarship opportunities, as well as debt 
						relief.
					</p>
				</div>

				<div className="mission-vision-values-card">
					<h3>Vision</h3>
					<p>
						Our vision of success includes a continuous
						stream of space-related projects built by
						aspiring tech professionals and invented by the
						leaders of tomorrow. Through funding these big
						ideas and mentoring the talent of the future, 
						our goal is to build momentum toward women, 
						people of color, and people from the LGBTQ+
						community holding the helm of the 500 largest 
						companies in the United States.
					</p>
				</div>

				<div className="mission-vision-values-card">
					<h3>Values</h3>
					<p>
						We value the voices of those too often talked
						over and under appreciated, because we firmly
						believe that a diverse group of people approaching
						a problem will arrive at a more creative and
						unique solution; a solution that incorporates
						each individual's perspectives, values, and 
						needs. We aim to operate from a starting point
						of equity, inclusion, and belonging.
					</p>
				</div>
			</section>
		</>
	);
}
