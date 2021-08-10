import React from 'react';

/**
 * Creates check box for planet system element
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

 export default function DiscoveryMethodListItem(props){
    const filterMethods = props.element;
    return(
      <div>
         <input
         type="checkbox"
         id="discovery-method"
         name="discovery-method"
         value={filterMethods[0]}
         />
         <span>{filterMethods[1]}</span>
      </div>
   );
}
