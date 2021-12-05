import React from "react";
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
        console.log('key: ', key, ' / value: ', value)
        if (numberFilter[dataName]) {
            setNumberFilter(prevState => {
                Object.assign(prevState[dataName], { [key]: value })
                return prevState
            })
        }
        else {
            setNumberFilter(prevState => {
                prevState[dataName] = { [key]: value }
                return prevState
            })
        }
        // if the user doesn't change the pre-populated operator sign, the operator state needs to be set manually
        // if the changed key is the value key (not the operator key)
        if (key === 'value') {
            setNumberFilter(prevState => {
                // and if the previous state of the particular column / dataName has no operator key
                if (!prevState[dataName].hasOwnProperty('operator'))
                    console.log('success')
                    Object.assign(prevState[dataName], { 'operator': '<' })
                return prevState
            })
        }
    }

    return (
        <>
            {/* todo: [Sven Gerlach] styling */}
            <Form.Control
                as="select"
                name={'operator'}
                value={numberFilter[dataName] && numberFilter[dataName]['operator']}
                onChange={e => handleFormValueChange(e)}
            >
                <option value={"<"}>&lt;</option>
                <option value={"="}>=</option>
                <option value={">"}>&gt;</option>
            </Form.Control>
            <Form.Control
                placeholder={'Number'}
                name={'value'}
                value={numberFilter[dataName] && numberFilter[dataName]['value']}
                onChange={e => handleFormValueChange(e)}
            />
        </>
    )
}
