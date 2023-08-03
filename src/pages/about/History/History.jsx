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

    useEffect(() => {setHistoryItem(newAboutHistoryArray[itemIndex])}, [itemIndex])

    useEffect(() => {setStyle({
        top: `${scrollPosition}px`,
    })}, [scrollPosition])


    function scrollDown() {
        setStyle({
            top: `${scrollPosition}px`,
            animationName: `dates-scroll-down`,
            animationDuration: `.5s`,
            animationTimingFunction: `ease-in-out`,
        })
        setTimeout(() => {
            setScrollPosition(scrollPosition - 150);
        }, 499)
        console.log(`scrolled down, new position: ${scrollPosition}, new style: ${style}`)
    }

    function scrollUp() {
        setStyle({
            top: `${scrollPosition}px`,
            animationName: `dates-scroll-up`,
            animationDuration: `.5s`,
            animationTimingFunction: `ease-in-out`,
        })
        setTimeout(() => {
            setScrollPosition(scrollPosition + 150);
        }, 499)
    }

    function handleCarouselUp() {
        if (itemIndex === 0) {
            //find way to shrink current
            setItemIndex(newAboutHistoryArray.length - 1)
            setStyle({
                top: `${scrollPosition}px`,
                animationName: `top-to-bottom`,
                animationDuration: `.5s`,
                animationTimingFunction: `ease-in-out`,
            })
            setTimeout(() => {
                setScrollPosition(-450)
            }, 499)
        } else {
            setItemIndex(itemIndex - 1)
            scrollUp()
        }
    }

    function handleCarouselDown() {
        //find way to shrink current
        if (itemIndex === newAboutHistoryArray.length - 1) {
            setItemIndex(0);
            setStyle({
                top: `${scrollPosition}px`,
                animationName: `bottom-to-top`,
                animationDuration: `.5s`,
                animationTimingFunction: `ease-in-out`,
            })
            setTimeout(() => {
                setScrollPosition(0)
            }, 499)
        } else {
            setItemIndex(itemIndex + 1)
            scrollDown();
        }
    }

    return (
        <section id="new-history-section">

            <h2 className="header">History</h2>

            <div className="container">

                <div className="date-picker-wrapper">
                    <img src={polygon1} onClick={handleCarouselUp}></img>

                    <div className="scroll-outer">

                        <div style={style} className="scroll-inner">
                            {newAboutHistoryArray.map((item, i) => {
                                return (
                                    <div 
                                        className={
                                            i == itemIndex ? "selected-date" : "upcoming-date"
                                        } 
                                        key={i}
                                    >
                                        <div>{item[0]}</div>
                                        <div>{item[1]}</div>
                                    </div>
                                );
                            })}

                        </div>

                    </div>  
                        
                    <img src={polygon2} onClick={handleCarouselDown}></img>
                </div>

                <div className="content-wrapper">
                    
                    <div className="selected-content">

                        <div className="content-image-wrapper">
                            <img src={historyItem[2]}></img>
                        </div>

                        <br/>

                        <p>{historyItem[3]}</p>
                        
                    </div>
                    
                </div>

            </div>

        </section>
    );
}