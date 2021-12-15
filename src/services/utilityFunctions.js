import { useEffect, useRef } from "react";

/**
 * Custom hook that executes the provided callback (fn) only if it is not the first
 * render and if the state of the provided array (arr) has changed
 * @param fn
 * @param arr
 */
export function useEffectSkipFirstRender(fn, arr) {
    // keep track of whether the custom hook is executed for the first time
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        return fn();
    }, arr);
}

/**
 * Open download prompt for selected data in the specified data type
 * Sources:
 * https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
 * https://stackoverflow.com/questions/3802510/force-to-open-save-as-popup-open-at-text-link-click-for-pdf-in-html
 *
 * @param data
 * @param dataType
 * @param filename
 */
export function downloadData(data, dataType, filename) {
    // create a blob with the data and stipulate the data type / format
    const blob = new Blob([data], {type: dataType});
    const link = document.createElement('a');
    // create a DOMString containing a URL representing the blob object given in the parameter
    link.href = URL.createObjectURL(blob);
    // ensure the download prompt is opened
    link.download = filename;
    link.target = '_blank';
    // some browser need the anchor to be in the DOM
    document.body.append(link);
    link.click();
    link.remove();
}
