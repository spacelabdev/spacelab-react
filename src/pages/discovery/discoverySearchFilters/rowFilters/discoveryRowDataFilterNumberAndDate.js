import React from "react";
import { Form } from "react-bootstrap";


/**
 * Filter data columns with data type 'number'
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export default function DiscoveryRowDataFilterNumberAndDate(props) {
    const {
        dataType,
        dataName,
        whereFilter,
        setWhereFilter
    } = props;

    const handleFormValueChange = (e) => {
        const key = e.target.name
        const value = e.target.value

        // update operator and value state
        setWhereFilter(prevState => {
            const newDataNameObj = Object.assign(prevState[dataName], { [key]: value })
            return { ...prevState, [dataName]: newDataNameObj}
        })
    }

    const valueFilterJSX = () => {
        switch (dataType) {
            case 'number':
                return (
                    <Form.Control
                        placeholder={'Number'}
                        name={'value'}
                        value={whereFilter[dataName]['value']}
                        onChange={e => handleFormValueChange(e)}
                    />
                )
            case 'date':
                return (
                    <Form.Control
                        type={'date'}
                        name={'value'}
                        value={whereFilter[dataName]['value']}
                        onChange={e => handleFormValueChange(e)}
                    />
                )
        }
    }

    return (
        <>
            {/* todo: [Sven Gerlach] styling */}
            <Form.Control
                as="select"
                name={'operator'}
                value={whereFilter[dataName]['operator']}
                onChange={e => handleFormValueChange(e)}
            >
                <option value={"<"}>&lt;</option>
                <option value={"="}>=</option>
                <option value={">"}>&gt;</option>
            </Form.Control>
            {valueFilterJSX()}
        </>
    )
}
