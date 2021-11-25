import React from "react";
import { Form } from "react-bootstrap";


export default function DiscoveryRowDataFilterNumber(props) {
    const {
        dataName,
        numberFilter,
        setNumberFilter
    } = props;

    const handleFormValueChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        if (numberFilter[dataName]) {
            setNumberFilter(prevState => {
                console.log(prevState)
                Object.assign(prevState[dataName], { [key]: value })
                return prevState
            })
        }
        else {
            setNumberFilter(prevState => {
                console.log(prevState)
                prevState[dataName] = { [key]: value }
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
