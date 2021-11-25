import React from "react";
import { Form } from "react-bootstrap";
import DiscoveryRowDataFilterNumber from "./discoveryRowDataFilterNumber";
import data from "bootstrap/js/src/dom/data";


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
