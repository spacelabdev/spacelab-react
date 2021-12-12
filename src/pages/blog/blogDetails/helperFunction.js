/**
 * Parses html string and finds unclosed empty or void elements, and closes them.
 * @param htmlString
 * @returns {string}
 */

export const searchForEmptyElement = (htmlString) => {
    const emptyElements = [
        "<area", "<base", "<br", "<col", "<embed", "<hr", "<img", "<input", "<keygen", "<link", "<meta", "<param", "<source", "<track", "<wbr"
    ]
    let str = htmlString  // string to evaluate
    let updatedStr = ""    // string evaluated
    let strEnd = ""   //seperates end string nnot evaluated yet
    let finalString = ""

    // function to determine if element is closed
    function isTagClosed(elementStr) {
        //find the corresponding closing tag after the empty element
        let [start, ...end] = elementStr.split('>');
         //separates rest of string, and sets that as next string to evaluate
        strEnd = end.join(">");

        // if closing tag is not closed, add "/"
        if (start[start.length - 1] !== "/") {
            return `${start}/>`
        // else return original string
        } else {
            return `${start}>`
        }
    }

    for(let i = 0; i < emptyElements.length; i++) {
        let beforeElement = ""
        let afterElement = ""

        //loops through elements, searching for match in string
        let result = emptyElements.some(str => str.includes(emptyElements[i])) //true or false
        //index of element in original string
        let index = htmlString.indexOf(emptyElements[i])

        //if found element, separate string so to find next closing tag
        if (result === true) {
            let foundElement = emptyElements[i]

            //loops through string, searching for match of found element
            while (index !== -1) {
                //index of element in new string
                let newIndex = str.indexOf(foundElement)

                afterElement =  str.substring(newIndex)
                beforeElement = str.substring(0, newIndex)

                // Function to determine if element is closed
                afterElement = isTagClosed(afterElement)

                //allows us to check for multiples of same tag
                index = htmlString.indexOf(emptyElements[i], index + 1)

                //set evaluated string
                updatedStr = updatedStr + beforeElement + afterElement

                // set string to evaluate
                str = strEnd
            }
            // set final string after closing element tags
            finalString = updatedStr + str

            // set string to evaluate
            str = finalString

            // reset
            updatedStr = ""
        }
    }
  return finalString
}
