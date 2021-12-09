/**
 * Module for utility functions
 */

import { useEffect, useRef } from "react";


/**
 * Custom hook that executes the provided callback (fn) only if it is not the first
 * render and if the state of the provided array (arr) has changed
 * @param fn
 * @param arr
 */
export function useEffectSkipFirstRender(fn, arr) {
    // keep track of whether the custom hook is executed for the first time
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        return fn()
    }, arr)
}
