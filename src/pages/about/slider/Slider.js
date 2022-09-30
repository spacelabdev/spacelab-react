import React, { useState } from "react";
import "./Slider.scss";
import dataSlider from "./dataSlider";
import Menu from "./Menu";
import BtnSlider from "./BtnSlider";

export default function Slider() {
	const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
		if (slideIndex !== dataSlider.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === dataSlider.length) {
			setSlideIndex(1);
		}
	};

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(dataSlider.length);
		}
	};

	const moveDot = (index) => {
		setSlideIndex(index);
	};

	return (
		<div className="container-slider">
			<div className="header">
				<div className="meet-our-team">Meet Our Team</div>
			</div>
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

			<BtnSlider moveSlide={nextSlide} direction={"next"} />
			<BtnSlider moveSlide={prevSlide} direction={"prev"} />

			<div className="container-dots">
				{Array.from({ length: 5 }).map((item, index) => (
					<div
						onClick={() => moveDot(index + 1)}
						className={
							slideIndex === index + 1 ? "dot active" : "dot"
						}
					></div>
				))}
			</div>
		</div>
	);
}
