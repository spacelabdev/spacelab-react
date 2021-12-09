// helper function to close any open emptyElement tags

const emptyElements = [
  "<area",
  "<base",
  "<br",
  "<col",
  "<embed",
  "<hr",
  "<img",
  "<input",
  "<keygen",
  "<link",
  "<meta",
  "<param",
  "<source",
  "<track",
  "<wbr"
]

let sentence = `<div> <img img tag number 1 ><link link tag number 1><img img tag num 2 >`
let sentence1 = `<img i'm already closed image tag/><img not closed img tag>`

let strEnd = ""

console.log("END RESULT:........ ", searchForEmptyElement(sentence))
console.log("END RESULT Test 2:........ ",searchForEmptyElement(sentence1))

/********************************************************************************
Fuction to search for emptyElement                                             */

function searchForEmptyElement(originalStr){
  let str = originalStr  // string to evaluate
  let updatedStr = ""    // string evaluated
  let finalString = ""

   for(let i = 0; i < emptyElements.length; i++){

    let beforeElement = ""
    let afterElement = ""

    //loops through elements, searching for match in string
    let result = emptyElements.some(w => str.includes(emptyElements[i])) //true or false

    let index = originalStr.indexOf(emptyElements[i])  //index of element in orignal string

    //if found element, seperate string so to find next closing tag
    if(result === true){
      let foundElement = emptyElements[i]

      //loops through string, searching for match of found element
      while (index !== -1) {

        let newIndex = str.indexOf(foundElement)  //index of element in new string

        afterElement =  str.substring(newIndex)
        beforeElement = str.substring(0, newIndex)

        // Fuction to determine if element is closed
        afterElement = isTagClosed(afterElement)

        index = originalStr.indexOf(emptyElements[i], index + 1)   //allows us to check for multiples of same tag

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
/********************************************************************************/

/********************************************************************************
Fuction to determine if element is closed                                      */

function isTagClosed(elementStr){
  //find the cooresponding closing tag after the empty element
  let [start, ...end] = elementStr.split('>');
  strEnd = end.join(">");  //seperates rest of string, and sets that as next string to evaluate

  // if closing tag is not closed, add "/"
  if(start[start.length - 1] !== "/"){
    return `${start}/>`
  // else return original string
  } else {
    return `${start}>`
  }
}
/********************************************************************************/
