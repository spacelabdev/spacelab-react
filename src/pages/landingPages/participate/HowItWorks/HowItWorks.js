import "./HowItWorks.scss";
import workInTeams from "../assets/how-it-works-teams.png";
import crossCollab from "../assets/how-it-works-cross-collab.png";
import gainReal from "../assets/how-it-works-gain-real.png";

export default function HowItWorks() {
	return (
		<section id="how-it-works" className="participate-section how-it-works">
			<h2>How It Works</h2>
			<div className="how-it-works-container">
				<div className="how-it-works-element">
					<img src={workInTeams} alt="A team working together" />
					<h3>Work In Teams</h3>
					<p>
						Work with a diverse group, exchanging ideas and
						expertise to achieve innovative solutions. Together, we
						foster a supportive community that values cooperation
						and communication.
					</p>
				</div>
				<div className="how-it-works-element">
					<img src={crossCollab} alt="A whiteboard with notes" />
					<h3>Cross Collaborate</h3>
					<p>
						Join forces with individuals from diverse backgrounds
						and experiences to create groundbreaking solutions.
						Learn, expand your horizons, and develop a well-rounded
						skill set through multidisciplinary projects.
					</p>
				</div>
				<div className="how-it-works-element">
					<img src={gainReal} alt="Someone working at a laptop" />
					<h3>Gain Real World Experience</h3>
					<p>
						Gain hands-on experience in outer-space technology
						initiatives. Work on meaningful projects, make a
						tangible impact, and receive mentorship from others in
						the industry to build a strong foundation for your
						career.
					</p>
				</div>
			</div>
		</section>
	);
}
