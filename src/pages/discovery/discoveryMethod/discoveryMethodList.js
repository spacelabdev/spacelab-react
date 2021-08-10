import React from 'react';
import {discoveryMethodFiltersArray} from '../discoveryHelper';
import DiscoveryMethodListItem from './discoveryMethodListItem';

/**
 * Maps over planetSystemsFiltersArray and passes elements to DiscoveryPlanetSystemsListItem to be parsed and rendered.
 * @returns {JSX.Element} Elements from DiscoveryPlanetSystemsListItem
 * @constructor
 */

export default function DiscoveryMethodList(){
   const methodFilters = discoveryMethodFiltersArray.map((e, index)=>{
      return(
         <DiscoveryMethodListItem element={e} key={index}/>
      )
   });
   return(
      <div>
         <h2>Discovery Method</h2>
         <div className={'discovery-method'}>
            {methodFilters}
         </div>
      </div>
   );
}
