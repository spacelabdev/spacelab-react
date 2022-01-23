import React, { useEffect, useState } from "react";
import "./simpleButton.scss"
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";


/**
 * Returns a button component which either accepts a callback function (buttonEffectAsync) or a url string
 * (urlRedirect). Upon pressing the button either the callback is invoked or the user is redirected to the provided URL.
 * Provide either urlRedirect or buttonEffectAsync function, but not both.
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
                // push url onto history object
                history.push(urlRedirect)
            }

            // execute if button is supposed to do something other than redirect
            if (buttonEffectAsync) {
                // TODO: This does not fail gracefully when used in the discover filters, and no filters are checked
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
        // This side effect needs to run only if the isLoading var changes. In particular, adding buttonEffectAsync
        // causes the buttonEffectAsync callback to be executed twice and with it two API calls to the CalTech endpoint.
        // eslint-disable-next-line
    }, [isLoading])

    // set isLoading state to true if button is clicked
    const handleButtonClick = () => {
        setIsLoading(true)
    }

    return (
        <Button
            variant={"primary"}
            disabled={isLoading}
            onClick={handleButtonClick}
        >
            {isLoading
                ? "Loading..."
                : buttonName
            }
        </Button>
    )
}
