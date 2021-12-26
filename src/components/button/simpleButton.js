import React, { useEffect, useState } from "react";
import "./simpleButton.scss"
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";


/**
 * Returns a button component which either accepts a function that executes something or redirects the user to a page
 * view. Ensure either urlRrdirect or buttonEffect function is provided but not both
 * @param props.buttonName {string} button name displayed
 * @param props.urlRedirect {string} click event redirects user to this url
 * @param props.buttonEffectAsync {function} function that is executed if button is clicked and returns a promise
 * @return {JSX.Element}
 * @constructor
 */
export default function SimpleButton(props) {
    // spread props
    const {
        buttonName,
        urlRedirect=null,
        buttonEffectAsync=null,
    } = props

    // create history object from useHistory hook
    const history = useHistory()

    // state variable that indicates whether the button's synchronous function is loading or not
    const [isLoading, setIsLoading] = useState(false)

    // invoke the button effect if isLoading variable changes state from false to true
    useEffect(() => {
        if (isLoading) {
            // execute if button is supposed to redirect
            if (urlRedirect) {
                history.push(urlRedirect)
            }

            // execute if button is supposed to do something other than redirect
            if (buttonEffectAsync) {
                console.log("button clicked: function")
                buttonEffectAsync()
                    .then(res => {
                        console.log(res)
                    })
                    .catch(e => {
                        console.error(e)
                    })
                    .finally(() => {
                        setIsLoading(false)
                    })
            }
        }
    }, [isLoading, urlRedirect, buttonEffectAsync])

    // set isLoading state to true if button is clicked
    const handleButtonClick = () => {
        setIsLoading(true)
    }

    return (
        <Button
            variant={"primary"}
            disabled={isLoading}
            onClick={!isLoading ? handleButtonClick : null}
        >
            {isLoading
                ? "Loading..."
                : buttonName
            }
        </Button>
    )
}
