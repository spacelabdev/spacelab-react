import React from "react";
import "./sliderNav.scss";

const SliderNavLink = ({navObject, activeSlide, setActive}) => {
	return (
		<div className={`${activeSlide === navObject.activeFlag ? 'active' : ''}`}
		     onClick={() => setActive(navObject.activeFlag)}
		>
			{navObject.title}
		</div>
	);
}

export default SliderNavLink;