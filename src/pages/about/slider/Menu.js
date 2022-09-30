import React from "react";
import "./Menu.scss";
import SimpleButton from "../../../components/button/simpleButton";

export default function Menu({ setSlideIndex }) {
	return (
		<div className="menu">
			<div className="cohorts">
                <SimpleButton buttonName='Current Cohort'/>
                <SimpleButton buttonName='Past Cohorts'/>
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
