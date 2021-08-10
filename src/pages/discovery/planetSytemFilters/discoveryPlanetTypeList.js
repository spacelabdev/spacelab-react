import React from "react";
import {planetTypeFiltersArray} from "../discoveryHelper";
import DiscoveryPlanetTypeListItem from "./discoveryPlanetTypeListItem";

export default function DiscoveryPlanetTypeListItem (){

   const filterArray = planetTypeFiltersArray.map((e, index)=>{
      return(
         <DiscoveryPlanetTypeListItem element={e} key={index}/>
      )
   })
   return (
      <div id={"filter"}>
         <h2>Planet Type</h2>
         <div className={"planet-type"}>
            {filterArray}
         </div>
      </div>
   )
}
