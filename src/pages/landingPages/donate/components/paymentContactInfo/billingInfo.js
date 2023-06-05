import React, { useState } from "react"

const BillingInfo = () => {
  const [streetAddress, setStreetAddress] = useState('')
  const [addressNumber, setAddressNumber] = useState('')
  const [city, setCity] = useState('')
  const [stateLocation, setStateLocation] = useState('')
  const [zipCode, setZipCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setStreetAddress('')
    setAddressNumber('')
    setCity('')
    setStateLocation('')
    setZipCode('')
  }


  return (

    <div className="billing-info-container">
    <h3>Billing Address</h3>
    <form>
      <div>
        <label htmlFor='streetAddress'>Street address</label>
        <input
          type='text'
          id='streetAddress'
          value={streetAddress}
          onChange={(e) => streetAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='addressNumber'>Apt.,ste.,bldg.</label>
        <input
          type='text'
          id='addressNumber'
          value={addressNumber}
          onChange={(e) => addressNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          value={city}
          onChange={(e) => city(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='stateLocation'>State</label>
        <input
          type='text'
          id='stateLocation'
          value={stateLocation}
          onChange={(e) => stateLocation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='zipCode'>Zip Code</label>
        <input
          type='text'
          id='zipCode'
          value={zipCode}
          onChange={(e) => zipCode(e.target.value)}
        />
      </div>
    </form>
    </div>
  )
}

export default BillingInfo