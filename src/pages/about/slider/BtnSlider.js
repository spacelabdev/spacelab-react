import React from "react";
import "./Slider.scss";
import leftArrow from "../../../assets/left-arrow.svg";
import rightArrow from "../../../assets/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img alt='buttons' src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
