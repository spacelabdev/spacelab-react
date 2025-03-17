import { useState, useEffect } from "react";
import { newAboutHistoryArray } from "./aboutHelper";
import polygon1 from "../../assets/aboutAssets/polygon1.svg";
import polygon2 from "../../assets/aboutAssets/polygon2.svg";

export default function HistorySection() {
    const [itemIndex, setItemIndex] = useState(0);
    const [historyItem, setHistoryItem] = useState(
        newAboutHistoryArray[itemIndex]
    );
    const [scrollPosition, setScrollPosition] = useState(0);
    const [style, setStyle] = useState({ left: 0 });
    const [prevIndex, setPrevIndex] = useState(0);
    const [fade, setFade] = useState(null);
    const [isMobile, setIsMobile] = useState(); 

    useEffect(() => {
        // Func to initialize isMobile based on current screen width 
        function handleResize() {
            setIsMobile(window.innerWidth <= 1199);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // set date hight pixels based on whether mobile version or desktop version
    const dateWidth = isMobile ? 100 : 150; 
   
    useEffect(() => {
        setHistoryItem(newAboutHistoryArray[itemIndex]);
    }, [itemIndex]);

    useEffect(() => {
        setStyle({
            left: `${scrollPosition}px`,
        });
    }, [scrollPosition]);

    function scrollOne(scrollDirection) {
        setStyle({
            // from current scrollPosition...
            left: `${scrollPosition}px`,
            // if scrollDirection is negative, scroll right, otherwise scroll left
            animationName:
                scrollDirection < 0 ? 
                    isMobile ? 
                    "dates-scroll-right-mobile" : "dates-scroll-right" 
                : isMobile ? 
                    "dates-scroll-left-mobile": "dates-scroll-left",
            animationDuration: `.5s`,
            animationTimingFunction: `ease-in-out`,
        });
        // after scroll animation completes, update scrollPosition to selected value
        setTimeout(() => {
            setScrollPosition(scrollPosition + dateWidth * scrollDirection);
        }, 499);
    }

    function handleCarousel(direction) {
        setFade("out");
        setPrevIndex(itemIndex);

        if (direction === "left") {
            // if at left already, scroll to end
            if (itemIndex === 0) {
                //initiate scrolling animation from current scrollPosition
                setStyle({
                    left: `${scrollPosition}px`,
                    animationName: isMobile ? `left-to-right-mobile` : `left-to-right`,
                    animationDuration: `.5s`,
                    animationTimingFunction: `ease-in-out`,
                });
                // after scroll animation is complete, set new position
                setTimeout(() => {
                    isMobile ? setScrollPosition(-300) : setScrollPosition(-450);  
                }, 499);
            } else {
                //if NOT at left already, initiate scroll left
                scrollOne(1);
            }
        } else if (direction === "right") {
            // if at end already, scroll to left
            if (itemIndex === newAboutHistoryArray.length - 1) {
                //initiate scrolling animation from current scrollPosition
                setStyle({
                    right: `${scrollPosition}px`,
                    animationName: isMobile ? `right-to-left-mobile` : `right-to-left`,
                    animationDuration: `.5s`,
                    animationTimingFunction: `ease-in-out`,
                });
                // after scroll animation is complete, set new position
                setTimeout(() => {
                    setScrollPosition(0);
                }, 499);
            } else {
                //if NOT at end already, initiate scroll right
                scrollOne(-1);
            }
        }
        // as scroll is happening, fade into newly selected image/text
        setTimeout(() => {
            if (direction === "left") {
                setItemIndex(
                    itemIndex === 0
                        ? newAboutHistoryArray.length - 1
                        : itemIndex - 1
                );
            } else if (direction === "right") {
                setItemIndex(
                    itemIndex === newAboutHistoryArray.length - 1
                        ? 0
                        : itemIndex + 1
                );
            }
            setFade("in");
        }, 250);
    }

    function handleClick(evt, idx) {
        // no action if clicking on already selected date
        if (itemIndex !== idx) {
            // scroll right one
            if (idx - itemIndex === 1) {
                handleCarousel("right");
            }
            //scroll right two
            if (idx - itemIndex === 2) {
                setFade("out");
                setPrevIndex(itemIndex);
                //initiate scrolling animation from current scrollPosition
                setStyle({
                    left: `${scrollPosition}px`,
                    animationName: `scroll-right-two`,
                    animationDuration: `.5s`,
                    animationTimingFunction: `ease-in-out`,
                });
                setTimeout(() => {
                    setScrollPosition(scrollPosition - dateWidth * 2);
                }, 499);
                setTimeout(() => {
                    setItemIndex(idx);
                    setFade("in");
                }, 500);
            }
        }
    }

    return (
		<>
			<section id="history-container">
				<h2 className="header">HISTORY</h2>
				<div className="container">
					<div
						aria-label="timeline with notable dates"
						className="date-picker-wrapper"
					>
						<button
							aria-label="left arrow"
							className="arrow-wrapper"
							onClick={() => handleCarousel("left")}
						>
							<img alt="left arrow" src={polygon1}></img>
						</button>

						<div className="scroll-outer">
							<div style={style} className="scroll-inner">
								{newAboutHistoryArray.map((item, i) => {
									return (
										<div
											aria-label={
												i === itemIndex
													? "selected date"
													: "upcoming date"
											}
											onClick={(evt) => handleClick(evt, i)}
											className={
												i !== itemIndex
													? i === prevIndex
														? "upcoming-date deselected-date"
														: "upcoming-date"
													: "selected-date"
											}
											key={i}
										>
											{item[0]}
											<br></br>
											{item[1]}
										</div>
									);
								})}
							</div>
						</div>

						<button
							aria-label="right arrow"
							className="arrow-wrapper"
							onClick={() => handleCarousel("right")}
						>
							<img alt="right arrow" src={polygon2}></img>
						</button>
					</div>

					<div className={`content-wrapper`}>
						<div className="selected-content">
							<div className="content-image-wrapper">
								<img
									alt={historyItem[3]}
									src={historyItem[2]}
                                    className=".content-image"
									style={{
										animationName:
											fade === "out" ? `fade-out` : `fade-in`,
										animationDuration: `.5s`,
										animationTimingFunction: `ease-in-out`
									}}
								/>
							</div>
							<p
                                className="content-paragraph"
								style={{
									animationName:
										fade === "out" ? `fade-out` : `fade-in`,
									animationDuration: `.5s`,
									animationTimingFunction: `ease-in-out`,
								}}
							>
								{historyItem[4]}
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
