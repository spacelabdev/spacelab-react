/**
 * Parses html string and finds unclosed empty or void elements, and closes them.
 * @param htmlString
 * @returns {string}
 */
export const searchForEmptyElement = (htmlString) => {
    const emptyElements = [
        "<area", "<base", "<br", "<col", "<embed", "<hr", "<img", "<input", "<keygen", "<link", "<meta", "<param", "<source", "<track", "<wbr"
    ];
    let updatedStr = "";   // string evaluated
    let strEnd = "";   //seperates end string not yet evaluated
    let finalString = "";

    for (let i = 0; i < emptyElements.length; i++) {
        let beforeElement = "";
        let afterElement = "";

        //loops through elements, searching for match in string
        let result = emptyElements.some(htmlString => htmlString.includes(emptyElements[i])); //true or false
        //index of element in original string
        let index = htmlString.indexOf(emptyElements[i]);

        //if found element, separate string so to find next closing tag
        if (result === true) {
            let foundElement = emptyElements[i];

            //loops through string, searching for match of found element
            while (index !== -1) {
                //index of element in new string
                let newIndex = htmlString.indexOf(foundElement);

                afterElement =  htmlString.substring(newIndex);
                beforeElement = htmlString.substring(0, newIndex);

                // determine if element is closed, find corresponding closing tag after empty element
                let [start, ...end] = afterElement.split('>');
                 //separates rest of string, and sets that as next string to evaluate
                strEnd = end.join(">");
                // if closing tag is not closed, add "/"
                if (start[start.length - 1] !== "/") {
                    afterElement = `${start}/>`;
                // else return original string
                } else {
                    afterElement = `${start}>`;
                }

                //check for multiples of same tag
                index = htmlString.indexOf(emptyElements[i], index + 1);

                //set evaluated string
                updatedStr = updatedStr + beforeElement + afterElement;

                // set string to evaluate
                htmlString = strEnd;
            }
            // set final string after closing element tags
            finalString = updatedStr + htmlString;

            // set string to evaluate
            htmlString = finalString;

            // reset
            updatedStr = "";
        }
    }
  return finalString;
}
