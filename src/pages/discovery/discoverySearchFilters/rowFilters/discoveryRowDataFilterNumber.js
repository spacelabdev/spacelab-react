import React, { useEffect } from "react";
import { Form } from "react-bootstrap";


/**
 * Component "where" row filter component for all columns with data type "number"
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export default function DiscoveryRowDataFilterNumber(props) {
    const {
        dataName,
        numberFilter,
        setNumberFilter
    } = props;

    const handleFormValueChange = (e) => {
        const key = e.target.name
        const value = e.target.value

        // update operator and value state
        setNumberFilter(prevState => {
            const newDataNameObj = Object.assign(prevState[dataName], { [key]: value })
            return { ...prevState, [dataName]: newDataNameObj}
        })
    }

    return (
        <>
            {/* todo: [Sven Gerlach] styling */}
            <Form.Control
                as="select"
                name={'operator'}
                value={numberFilter[dataName]['operator']}
                onChange={e => handleFormValueChange(e)}
            >
                <option value={"<"}>&lt;</option>
                <option value={"="}>=</option>
                <option value={">"}>&gt;</option>
            </Form.Control>
            <Form.Control
                placeholder={'Number'}
                name={'value'}
                value={numberFilter[dataName]['value']}
                onChange={e => handleFormValueChange(e)}
            />
        </>
    )
}
