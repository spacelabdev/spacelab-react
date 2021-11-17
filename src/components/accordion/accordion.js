import React from "react";
import "./accordion.scss";

export default function accordion() {
    return (
        <div className={"accordion-container"}>
            <div className={"accordion-container-heading"}>
                <div className={"accordion-container-heading-text"}>
                    Board of Directors
                </div>
                <div className={"accordion-container-heading-icon"}>▲</div>
            </div>
            <div className={"accordion-container-content"}>Test</div>
        </div>
    );
}
