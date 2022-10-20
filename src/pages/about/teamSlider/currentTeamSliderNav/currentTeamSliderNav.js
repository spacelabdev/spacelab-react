import React from "react";
import "./currentTeamSliderNav.scss";

export default function CurrentTeamSliderNav({ setState }) {
	return (
		<div className="menu">
			<div className="rows">
				<div onClick={() => setState('frontend')}>
					Frontend Developers
				</div>
				<div onClick={() => setState('backend')}>
					Backend Developers
				</div>
				<div onClick={() => setState('webgl')}>
					WebGL Developers
				</div>
				<div onClick={() => setState('designers')}>
					Designers
				</div>
				<div onClick={() => setState('datascience')}>
					Data Scientist
				</div>
				<div onClick={() => setState('writers')}>
					Writers
				</div>
				<div onClick={() => setState('leads')}>
					Leads
				</div>
				<div onClick={() => setState('board')}>
					Board
				</div>
			</div>
		</div>
	);
}