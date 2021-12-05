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

let sentence = `<img one img tag><link i am a link tag>`

let sentence1 = `<img oops i didnt account of there being more of the same tag><img this is another image tag>`

console.log("string with closed tags:")
console.log(searchForEmptyElement(sentence))
console.log("\nstring with only one closed tag :( ")
console.log(searchForEmptyElement(sentence1))

////////////////////////////////////////////////////////////////////////////
// Function to search for emptyElement

function searchForEmptyElement(str){
  let foundElement = ""
  let before = ""
  let afterElement = ""

  for(let i = 0; i < emptyElements.length; i++){
    //loops through array of emptyElements, searching for match in sentence
    let result = emptyElements.some(w => str.includes(emptyElements[i])) //true or false
    //if found empty element, seperate string so to find next closing tag
    if(result === true){
      foundElement = emptyElements[i]

      afterElement =  str.substring(str.indexOf(foundElement) + foundElement.length)

      before = str.substring(0, str.indexOf(foundElement) + foundElement.length)

      // Fuction to determine if element is closed
      afterElement = isTagClosed(afterElement)

      //set new str with updated closing tag
      str = before + afterElement

    }
  }
   return str
}
////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
// Fuction to determine if element is closed

function isTagClosed(str){
  //find the cooresponding closing tag after the empty element
  let [start, ...end] = str.split('>');
  end = end.join(">");  //prevents proceeding closing tags from being deleted

  // if closing tag is not closed, add "/"
  if(start[start.length - 1] !== "/"){
    return `${start}/>${end}`
  // else return original string
  } else {
    return str
  }
}
////////////////////////////////////////////////////////////////////////////
