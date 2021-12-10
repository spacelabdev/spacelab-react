import React from "react";
import DiscoveryRowDataFilterNumberAndDate from "./discoveryRowDataFilterNumberAndDate";
import DiscoveryRowDataFilterStringAndEnum from "./discoveryRowDataFilterStringAndEnum";


/**
 * Depending on the checked / selected column's data type, this function renders the appropriate component
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export default function DiscoveryRowDataFilter(props) {
    const {
        dataType,
        dataName,
        whereFilter,
        setWhereFilter,
        queryExoplanetDatabase,
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
                        queryExoplanetDatabase={queryExoplanetDatabase}
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
                        queryExoplanetDatabase={queryExoplanetDatabase}
                    />
                )
            default:
        }
    }

    return (
        <>
            {getFilterType()}
        </>
    )
}
