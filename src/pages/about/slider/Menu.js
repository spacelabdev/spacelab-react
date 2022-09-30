import React from "react";
import "./Menu.scss";

export default function Menu({ setSlideIndex }) {
	return (
		<div className="menu">
			<div className="cohorts">
				<button>Current Cohort</button>
				<button>Past Cohort</button>
			</div>
			<div className="rows">
				<div
					onClick={() => {
						setSlideIndex(1);
					}}
				>
					Developers
				</div>
				<div
					onClick={() => {
						setSlideIndex(2);
					}}
				>
					Designers
				</div>
				<div
					onClick={() => {
						setSlideIndex(3);
					}}
				>
					Data Scientist
				</div>
				<div
					onClick={() => {
						setSlideIndex(4);
					}}
				>
					Leads
				</div>
				<div
					onClick={() => {
						setSlideIndex(5);
					}}
				>
					Board
				</div>
			</div>
		</div>
	);
}
