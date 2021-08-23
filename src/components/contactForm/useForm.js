import React from 'react'

/**
 * @param initialState
 * @returns {{handleChange: handleChange, setFormData: (value: unknown) => void,
 * formData: unknown, setErrors: (value: unknown) => void, errors: unknown}}
 */
function useForm(initialState) {
	const [formData, setFormData] = React.useState(initialState)
	const [errors, setErrors] = React.useState(initialState)

	const handleChange = event => {
		const value = event.target.value
		const nextState = {...formData, [event.target.name]: value}
		const nextErrorState = {...errors, [event.target.name]: ''}
		setFormData(nextState)
		setErrors(nextErrorState)
	}

	return {
		formData,
		errors,
		handleChange,
		setErrors,
		setFormData
	}
}

export default useForm
