import React, { useState } from "react";
import "./accordion.scss";
import MemberCard from "../memberCard/memberCard";

export default function Accordion(props) {
  //States
    const [open, setOpen] = useState(false);
    const [arrow, setArrow] = useState(false);
  //Props
    const {title, members} = props;
    console.log(title,members);
  
    const handleAccordion = () => {
      setOpen(!open);
      setArrow(!arrow);
    }

    const openAccordion = open ? "accordion-open" : "";
    const flipArrow = arrow ? "icon-flip" : "";

    return (
        <div className="accordion-container">
            <div className="accordion-container-heading">
                <div className="accordion-container-heading-text">
                    {title}
                </div>
                <div className={`accordion-container-heading-icon ${flipArrow}`} onClick={handleAccordion}>▲</div>
            </div>
            <div className={`accordion-container-content ${openAccordion}`}>
              {members.map(member => <MemberCard member={member}/>)}
            </div>
        </div>
    );
}
