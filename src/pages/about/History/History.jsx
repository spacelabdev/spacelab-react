import { React, useState, useEffect } from "react";
import { newAboutHistoryArray } from "../aboutHelper";
import polygon1 from '../../../assets/aboutAssets/polygon1.svg';
import polygon2 from '../../../assets/aboutAssets/polygon2.svg';
import './History.scss';

export default function History() {
    const [itemIndex, setItemIndex] = useState(0)
    const [historyItem, setHistoryItem] = useState(newAboutHistoryArray[itemIndex])
    const [scrollPosition, setScrollPosition] = useState(0);
    const [style, setStyle] = useState({ top: 0})
    const [prevIndex, setPrevIndex] = useState(0)
    const [fade, setFade] = useState(null)

    const dateHeight = 150

    useEffect(() => {setHistoryItem(newAboutHistoryArray[itemIndex])}, [itemIndex])

    useEffect(() => {setStyle({
        top: `${scrollPosition}px`,
    })}, [scrollPosition])

    function scrollOne(scrollDirection) {
        setStyle({
            // from current scrollPosition...
            top: `${scrollPosition}px`,
            // if scrollDirection is negative, scroll down, otherwise scroll up
            animationName: scrollDirection < 0 ? "dates-scroll-down": "dates-scroll-up",
            animationDuration: `.5s`,
            animationTimingFunction: `ease-in-out`,
        })
        // after scroll animation completes, update scrollPosition to selected value
        setTimeout(() => {
            setScrollPosition(scrollPosition + (dateHeight * scrollDirection));
        }, 499)
    }

    function handleCarousel(direction) {
        setFade("out");
        setPrevIndex(itemIndex);
        
        if (direction === "up") {
            // if at top already, scroll to end
            if (itemIndex === 0) {
                //initiate scrolling animation from current scrollPosition
                setStyle({
                    top: `${scrollPosition}px`,
                    animationName: `top-to-bottom`,
                    animationDuration: `.5s`,
                    animationTimingFunction: `ease-in-out`,
                });
                // after scroll animation is complete, set new position
                setTimeout(() => {
                    setScrollPosition(-450);
                }, 499);
            } else {
                //if NOT at top already, initiate scroll up
                scrollOne(1);
            }
        } else if (direction === "down") {
            // if at end already, scroll to top
            if (itemIndex === newAboutHistoryArray.length - 1) {
                //initiate scrolling animation from current scrollPosition
                setStyle({
                    top: `${scrollPosition}px`,
                    animationName: `bottom-to-top`,
                    animationDuration: `.5s`,
                    animationTimingFunction: `ease-in-out`,
                });
                // after scroll animation is complete, set new position
                setTimeout(() => {
                    setScrollPosition(0);
                }, 499);
            } else {
                //if NOT at end already, initiate scroll down
                scrollOne(-1);
            }
        }
        // as scroll is happening, fade into newly selected image/text
        setTimeout(() => {
            if (direction === "up") {
                setItemIndex(itemIndex === 0 ? newAboutHistoryArray.length - 1 : itemIndex - 1);
            } else if (direction === "down") {
                setItemIndex(itemIndex === newAboutHistoryArray.length - 1 ? 0 : itemIndex + 1);
            }
            setFade("in");
        }, 250);
    }

    function handleClick(evt, idx) {
        // no action if clicking on already selected date
        if (itemIndex !== idx) {
            // scroll down one
            if (idx - itemIndex === 1) {handleCarousel("down")}
            //scroll down two
            if (idx - itemIndex === 2) {
                setFade("out")
                setPrevIndex(itemIndex)
                //initiate scrolling animation from current scrollPosition
                setStyle({
                    top: `${scrollPosition}px`,
                    animationName: `scroll-down-two`,
                    animationDuration: `.5s`,
                    animationTimingFunction: `ease-in-out`,
                })
                setTimeout(() => {
                    setScrollPosition(scrollPosition - (dateHeight * 2))
                }, 499)
                setTimeout(() => {
                    setItemIndex(idx)
                    setFade("in")
                }, 500)
            }  
        } 
    }

    return (
        <section id="new-history-section">

            <h2 className="header">History</h2>

            <div className="container">

                <div aria-label="timeline with notable dates" className="date-picker-wrapper">
                    <button aria-label="up arrow" className="arrow-wrapper" onClick={() => handleCarousel("up")}>
                        <img alt="up arrow"  src={polygon1}></img>
                    </button>
                    

                    <div className="scroll-outer">

                        <div style={style} className="scroll-inner">
                            {newAboutHistoryArray.map((item, i) => {
                                return (
                                    <div 
                                        aria-label={i == itemIndex ? "selected date" : "upcoming date"}
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
                                        {item[0]}<br></br>{item[1]}
                                    </div>
                                );
                            })}

                        </div>

                    </div>  
                        
                    <button aria-label="down arrow" className="arrow-wrapper" onClick={() => handleCarousel("down")}>
                        <img alt="down arrow" src={polygon2}></img>
                    </button>
                </div>

                <div className={`content-wrapper`} >
                    <div className="selected-content">

                        <div className="content-image-wrapper">
                            <img 
                                alt={historyItem[3]}
                                src={historyItem[2]}
                                style={{
                                        animationName: fade === "out" ? `fade-out` : `fade-in`,
                                        animationDuration: `.5s`,
                                        animationTimingFunction: `ease-in-out`,     
                                }}
                                
                            ></img>
                        </div>

                        <br/>

                        <p style={{
                            animationName: fade === "out" ? `fade-out` : `fade-in`,
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
    );
}