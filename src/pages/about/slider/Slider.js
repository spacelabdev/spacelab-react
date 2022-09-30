import React, { useState } from "react";
import "./Slider.scss";
import dataSlider from "./dataSlider";
import Menu from "./Menu";

export default function Slider() {
	const [slideIndex, setSlideIndex] = useState(1);

	return (
		<div className="container-slider">
			<div className="header">Meet Our Team</div>
			<Menu setSlideIndex={setSlideIndex} />
			{dataSlider.map((obj, index) => {
				return (
					<div
						// refernce to dataSlider and the different IDs
						key={obj.id}
						// map function starting from 0, add 1 to move
						className={
							slideIndex === index + 1
								? "slide active-anim"
								: "slide"
						}
					>
						<img
							alt="slider"
							// add custom URL to reference IMG during build
							src={
								process.env.PUBLIC_URL +
								`/Imgs/img${index + 1}.jpg`
							}
						/>
					</div>
				);
			})}
		</div>
	);
}
