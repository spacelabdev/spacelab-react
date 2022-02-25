import React, { useEffect, useRef, useState } from "react";
import "./dropdownButton.scss"


/**
 * Returns a dropdown button component
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export default function DropdownButton({ buttonLabel, dropdownItemClick, ...dropdownItems }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [buttonWidth, setButtonWidth] = useState()
    const dropdownMenuRef = useRef()

    /**
     * Set the width of the drop down menu
     */
    useEffect(() => {
        if (isDropdownOpen) {
            // set width of dropdown menu
            dropdownMenuRef.current.style.width = `${buttonWidth}px`
        }
        // eslint-disable-next-line
    }, [isDropdownOpen])

    // convert the values of the dictionary into an array whose elements can be mapped over
    const dropdownItemsArray = Object.values(dropdownItems)
    console.log(dropdownItemsArray)

    /**
     * set drop down button width in state and set isDropdownOpen to true or false
     * @param e
     */
    const handleDropdownToggleClick = (e) => {
        // get width of drop down button and set state
        const dropdownButtonWidth = e.target.offsetWidth
        setButtonWidth(dropdownButtonWidth)

        // open drop down
        setIsDropdownOpen(prevState => {
            return !prevState
        })
    }

    const handleDropdownItemClick = (e) => {
        e.preventDefault()
        // execute the provided function that governs the effects a click on the dropdown item has
        dropdownItemClick(e)
    }

    return (
        <div className={"dropdown-button-container"}>
            <button onClick={handleDropdownToggleClick}>
                {buttonLabel}
            </button>
            {isDropdownOpen && (
                <div ref={dropdownMenuRef}>
                    {dropdownItemsArray.map((dropdownItem, index) => {
                        return (
                            <button
                                key={index}
                                className={'dropdown-item'}
                                rel="noreferrer"
                                onClick={handleDropdownItemClick}
                            >
                                {dropdownItem.label}
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
