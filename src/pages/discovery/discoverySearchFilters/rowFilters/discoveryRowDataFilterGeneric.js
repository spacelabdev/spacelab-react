import React from "react";
import { Form } from "react-bootstrap";


/**
 * Component "where" row filter component for all columns with data type 'string', 'enum', and 'data'
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export default function DiscoveryRowDataFilterGeneric(props) {
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

    const filterJSX = () => {
        switch (dataType) {
            case 'string':
                return (
                    <Form.Control
                        placeholder={'String'}
                        name={'value'}
                        value={whereFilter[dataName]['value']}
                        onChange={e => handleFormValueChange(e)}
                    />
                )
            case 'enum':
                return (
                    <Form.Control
                        placeholder={'Select'}
                        name={'value'}
                        value={whereFilter[dataName]['value']}
                        onChange={e => handleFormValueChange(e)}
                    />
                )
            case 'date':
                return (
                    <Form.Control
                        placeholder={'Date'}
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
            {filterJSX()}
        </>
    )
}
