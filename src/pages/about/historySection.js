import React from 'react';
// import Planets_Circle from '../../assets/aboutAssets/planets_circle.svg'
// import Dot from '../../assets/aboutAssets/dot.svg'
import Line from '../../assets/aboutAssets/line.png'
/**
 * @returns {JSX.Element}
 * @constructor
 */

export default function HistorySection(){
    return (
        <section className="history-section">
            <h2 className="about-history-header"> <span className="bold-history">History</span></h2>
            <div className="history-container">             
                {/*<img className={"about-history-image"} src={Planets_Circle} alt={"Space"}/>*/}
                <div className="history">
                    <div className={"about-history-content"}>
                        <div className="history-dot">
                            {/*<img src={Dot} alt={"Space"}/>*/}
                            <img className={"history-line"} src={Line} alt={"Space"}/>
                        </div>
                        <div>
                            <h3>spacelab 2021.00.00</h3>
                            <p>
                                Lerem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                                Elit Adipiscing Sed Risus Neque Faucibus Tempus Et
                                Ante. Neque Aliquam Eleifend Donec Scelerisque Sagittis
                                Risus Semper Faucibus.
                            </p>
                        </div>
                    </div>
                    <div className="about-history-content">
                        <div className="history-dot">
                            {/*<img src={Dot} alt={"Space"}/>*/}
                            <img src={Line} alt={"Space"}/>

                         </div>
                        <h3>spacelab 2021.00.00</h3>
                        <p>
                            Lerem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                            Elit Adipiscing Sed Risus Neque Faucibus Tempus Et
                            Ante. Neque Aliquam Eleifend Donec Scelerisque Sagittis
                            Risus Semper Faucibus.
                        </p>
                    </div>
                    <div className="about-history-content">
                        <div className="history-dot">
                            {/*<img src={Dot} alt={"Space"}/>*/}
                            <img src={Line} alt={"Space"}/>

                        </div>
                        <div>
                            <h3>spacelab 2021.00.00</h3>
                            <p>
                                Lerem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                                Elit Adipiscing Sed Risus Neque Faucibus Tempus Et
                                Ante. Neque Aliquam Eleifend Donec Scelerisque Sagittis
                                Risus Semper Faucibus.
                            </p>
                        </div>
                        </div>
                </div>
            </div>
        </section>
    )
}