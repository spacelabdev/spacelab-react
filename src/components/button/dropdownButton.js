import React, { useRef } from "react";
import { Dropdown } from "react-bootstrap";
import "./dropdownButton.scss"


/**
 *
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export default function DropdownButton(props) {
    const {
        buttonLabel,
        queryExoplanetDatabase,
        dropdownItemClick,
        ...dropdownItems
    } = props

    // create a ref for the dropdown menu such that the width can be passed on to the dropdown items
    const dropdownMenu = useRef(null)

    // convert the values of the dictionary into an array whose elements can be mapped over
    const dropdownItemsArray = Object.values(dropdownItems)

    // retrieves width of dropdown button and sets the width of the dropdown menu to the same value
    const handleDropdownToggleClick = (isOpen, e) => {
        if (isOpen) {
            // width of dropdown button
            const dropdownButtonWidth = e.currentTarget.offsetWidth

            // set width of dropdown menu
            dropdownMenu.current.style.width = `${dropdownButtonWidth}px`
        }
    }

    const handleDropdownItemClick = (e) => {
        e.preventDefault()

        // execute the provided function that governs the effects a click on the dropdown item has
        dropdownItemClick(e)
    }

    const CustomDropdownItem = (props) => {
        return (
            <button
                className={'dropdown-item'}
                rel="noreferrer"
                onClick={handleDropdownItemClick}
            >
                {props.children}
            </button>
        )
    }

    return (
        <>
            <Dropdown onToggle={(isOpen, e) => handleDropdownToggleClick(isOpen, e)}>
                <Dropdown.Toggle>
                    {buttonLabel}
                </Dropdown.Toggle>

                {/* renderOnMount must be true or else handleDropdownToggleClick cannot set the style */}
                <Dropdown.Menu
                    ref={dropdownMenu}
                    renderOnMount={true}
                >
                    {dropdownItemsArray.map((dropdownItem, index) => {
                        return (
                            <Dropdown.Item
                                as={CustomDropdownItem}
                                key={index}
                            >
                                {dropdownItem.label}
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
