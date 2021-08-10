import React from "react";

export default function DiscoveryPlanetTypeListItem(props){
   const filterTypes = props.type;

   return(
      <>
         <input
         type="checkbox"
         id="planet-type"
         name="planet-type"
         value={filterTypes[0]}
         />
         <p>{filterTypes[1]}</p>
      </>
   )
}
