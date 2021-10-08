import React from 'react';
import Planet_Rings from "../../assets/aboutAssets/planet_rings.svg"

/**
 * @returns {JSX.Element}
 * @constructor
 */

export default function History(){
    return (
        <section className="about-history-container">
            <h1 className="about-history-header">HISTORY</h1>
            <div className="about-history-image">   
            <img className={"about-history-image"} src={Planet_Rings} alt={"Planet"}/>
            </div>
            <div className={"about-history-content"}>                   
                <h3 className="history-paragraph-header">
                    SPACELAB 2021.00.00
                </h3>
                <p>Lerem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Adipiscing Sed Risus Neque Faucibus Tempus Et Ante. Neque Aliquam Eleifend Donec Scelerisque Sagittis Risus Semper Faucibus.</p>
            </div>

            <div className={"about-history-content"}>                   
                <h3 className="history-paragraph-header">
                    SPACELAB 2021.00.00
                </h3>
                <p>Lerem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Adipiscing Sed Risus Neque Faucibus Tempus Et Ante. Neque Aliquam Eleifend Donec Scelerisque Sagittis Risus Semper Faucibus.</p>
            </div>

            <div className={"about-history-content"}>                   
                <h3 className="history-paragraph-header">
                    SPACELAB 2021.00.00
                </h3>
                <p>Lerem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Adipiscing Sed Risus Neque Faucibus Tempus Et Ante. Neque Aliquam Eleifend Donec Scelerisque Sagittis Risus Semper Faucibus.</p>
            </div>
        </section>
    )
}