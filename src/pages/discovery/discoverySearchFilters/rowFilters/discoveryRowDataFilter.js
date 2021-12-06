import React, { useEffect } from "react";
import DiscoveryRowDataFilterNumber from "./discoveryRowDataFilterNumber";
import DiscoveryRowDataFilterGeneric from "./discoveryRowDataFilterGeneric";


export default function DiscoveryRowDataFilter(props) {
    const {
        dataType,
        dataName,
        whereFilter,
        setWhereFilter
    } = props

    const getFilterType = () => {
        switch (dataType) {
            case 'number':
                // render the row data filter
                return (
                    <DiscoveryRowDataFilterNumber
                        dataName={dataName}
                        whereFilter={whereFilter}
                        setWhereFilter={setWhereFilter}
                    />
                )
            default:
                return (
                    <DiscoveryRowDataFilterGeneric
                        dataType={dataType}
                        dataName={dataName}
                        whereFilter={whereFilter}
                        setWhereFilter={setWhereFilter}
                    />
                )
        }
    }

    return (
        <>
            {getFilterType()}
        </>
    )
}
