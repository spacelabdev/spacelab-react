import React, { useEffect } from "react";
import DiscoveryRowDataFilterNumber from "./discoveryRowDataFilterNumber";


export default function DiscoveryRowDataFilter(props) {
    const {
        dataType,
        dataName,
        numberFilter,
        setNumberFilter
    } = props

    const getFilterType = () => {
        switch (dataType) {
            case 'number':
                // render the row data filter
                return (
                    <DiscoveryRowDataFilterNumber
                        dataName={dataName}
                        numberFilter={numberFilter}
                        setNumberFilter={setNumberFilter}
                    />
                )
            case 'string':
                console.log('string')
                return ''
            case 'enum':
                console.log('enum')
                return ''
            case 'date':
                console.log('date')
                return ''
        }
    }

    return (
        <>
            {getFilterType()}
        </>
    )
}
