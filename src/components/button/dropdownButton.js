import React, { useRef } from "react";
import { Dropdown } from "react-bootstrap";
import "./dropdownButton.scss"


export default function DropdownButton(props) {
    const {
        buttonLabel,
        ...dropdownItems
    } = props

    // create a ref for the dropdown menu such that the width can be passed on to the dropdown items
    const dropdownMenu = useRef(null)

    // convert the values of the dictionary into an array whose elements can be mapped over
    const dropdownItemsArray = Object.values(dropdownItems)

    const handleDropdownButtonClick = (isOpen, e) => {
        if (isOpen) {
            // width of dropdown button
            const dropdownButtonWidth = e.currentTarget.offsetWidth

            // set width of dropdown menu
            dropdownMenu.current.style.width = `${dropdownButtonWidth}px`
        }
    }

    return (
        <>
            <Dropdown onToggle={(isOpen, e) => handleDropdownButtonClick(isOpen, e)}>
                <Dropdown.Toggle id={'dropdown-button'}>
                    {buttonLabel}
                </Dropdown.Toggle>

                {/* renderOnMount must be true or else handleDropdownButtonClick cannot set the style */}
                <Dropdown.Menu
                    id={'dropdown-menu'}
                    ref={dropdownMenu}
                    renderOnMount={true}
                >
                    {dropdownItemsArray.map((dropdownItem, index) => {
                        return (
                            <Dropdown.Item
                                key={index}
                                id={'dropdown-item'}
                                href={dropdownItem.href}
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
