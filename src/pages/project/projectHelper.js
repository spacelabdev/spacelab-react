// TODO: Rename this file. Any file that is name "Helper" should contain functions or data that support the logic of
// some other file (See Glossary Helper). It would make more sense to call this projectsIntro.js or something like that.

import React from "react";

// TODO: The name of the exported function should match the name of the file. This function name will need to be updated
// to match whatever you decide to change the file name to.
export default function ProjectStatement (){
    return(
        <div>
            {/*TODO: These lines should be wrapped at 120 characters per our style guide. Code should not continue
            forever to the right of the screen requiring the next dev who gets into your file to scroll right to
            figure out what is going on.*/}
            <p>Spacelab is a project with the goal to explore NASA/CallTech data from the TESS, Kepler and K2 Missions using various degrees of Machine Learning and Deep Natural Networks in the pursuit of Earth-Like planets around nearby stars in the Milky Way Galaxy.</p>
            <br/>

            {/*// TODO: Same as above. Wrap line at 120 characters*/}
            <p>Our short-term goal is to find objects on interest for professional Astronomers to explore, and to classify already-identified candidates that have not yet been classified as either exoplanets or false-positives by the astronomical community.</p>
        </div>
    )
}

// TODO: I created a directory in assets called projectsAssets. This is where the image should be saved. The image can
//  be downloaded from the projects page of the figma file, or from the Branding page. Either way, click the image and
//  then on the pop up window on the right scroll down until you see Export. Click export and then change the file type
//  to SVG. Save to your computer and then move the file to the appropriate place in the assets folder.