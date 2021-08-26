import React from "react";

/**
 * @returns {JSX.Element}
 * @constructor
 */

 export default function Faq() {
	return (
        <section id="about-faq-container">
            <div className="section-three-inner-div">
                <div className="left-side-section-three">
                    <div id="faq">FAQ</div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum ligula nisi, tristique ut massa.
                    </div>
                </div>
                <div className="right-side-section-three">
                    <div className="right-side-nested-div">
                        <div className="question-div">
                            <p>Extroplanet Question</p>
                            <p>Habitable Zone</p>
                            <p>Solar System</p>
                            <p>Space Lab Question</p>
                        </div>
                        <div className="answer-div">
                            <p>Answer</p>
                            <p>Answer</p>
                            <p>Answer</p>
                            <p>Answer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}