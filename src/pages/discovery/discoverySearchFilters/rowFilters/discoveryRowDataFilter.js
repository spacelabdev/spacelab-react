import React, { useEffect } from "react";
import DiscoveryRowDataFilterNumberAndDate from "./discoveryRowDataFilterNumberAndDate";
import DiscoveryRowDataFilterStringAndEnum from "./discoveryRowDataFilterStringAndEnum";


export default function DiscoveryRowDataFilter(props) {
    const {
        dataType,
        dataName,
        whereFilter,
        setWhereFilter
    } = props

    // render the row data filter
    const getFilterType = () => {
        switch (dataType) {
            case 'number':
            case 'date':
                return (
                    <DiscoveryRowDataFilterNumberAndDate
                        dataType={dataType}
                        dataName={dataName}
                        whereFilter={whereFilter}
                        setWhereFilter={setWhereFilter}
                    />
                )
            case 'string':
            case 'enum':
                return (
                    <DiscoveryRowDataFilterStringAndEnum
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
