import React from "react";
import "./currentTeamSliderNav.scss";

export default function CurrentTeamSliderNav({activeSlide, setActive}) {
	return (
		<div className="menu">
			<div className="team-slider-nav-button-container">
				<div className={`${activeSlide === 'frontend' ? 'active' : ''}`}
				     onClick={() => setActive('frontend')}
				>
					Frontend Developers
				</div>
				<div className={`${activeSlide === 'backend' ? 'active' : ''}`}
				     onClick={() => setActive('backend')}
				>
					Backend Developers
				</div>
				<div className={`${activeSlide === 'webgl' ? 'active' : ''}`}
				     onClick={() => setActive('webgl')}
				>
					WebGL Developers
				</div>
				<div className={`${activeSlide === 'designers' ? 'active' : ''}`}
				     onClick={() => setActive('designers')}
				>
					Designers
				</div>
				<div className={`${activeSlide === 'datascience' ? 'active' : ''}`}
				     onClick={() => setActive('datascience')}
				>
					Data Scientist
				</div>
				<div className={`${activeSlide === 'writers' ? 'active' : ''}`}
				     onClick={() => setActive('writers')}
				>
					Writers
				</div>
				<div className={`${activeSlide === 'leads' ? 'active' : ''}`}
				     onClick={() => setActive('leads')}
				>
					Leads
				</div>
				<div className={`${activeSlide === 'board' ? 'active' : ''}`}
				     onClick={() => setActive('board')}
				>
					Board
				</div>
			</div>
		</div>
	);
}