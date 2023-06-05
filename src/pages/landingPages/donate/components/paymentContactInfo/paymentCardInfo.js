import React , { useState } from "react";

const PaymentCardInfo = () => {
  const [selectCountry, setSelectCountry] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [securityCode, setSecurityCode] = useState('')
  const [nameOnCard, setNameOnCard] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setSelectCountry('')
    setCardNumber('')
    setExpiration('')
    setSecurityCode('')
    setNameOnCard('')
  }

  return(

    <div className="payment-card-info-container">
    <h3>Donate with a Debit of Credit Card</h3>
    <form>
      <div>
        <label htmlFor='selectCountry'>Select your Country/Region</label>
        <input
          type='text'
          id='selectCountry'
          value={selectCountry}
          onChange={(e) => selectCountry(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='cardNumber'>Card Number</label>
        <input
          type='text'
          id='cardNumber'
          value={cardNumber}
          onChange={(e) => cardNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='expiration'>Expires</label>
        <input
          type='text'
          id='expiration'
          value={expiration}
          onChange={(e) => expiration(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='securityCode'>Security code</label>
        <input
          type='text'
          id='securityCode'
          value={securityCode}
          onChange={(e) => securityCode(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='nameOnCard'>Name on card</label>
        <input
          type='text'
          id='nameOnCard'
          value={nameOnCard}
          onChange={(e) => nameOnCard(e.target.value)}
        />
      </div>
    </form>
    </div>
  )
}

export default PaymentCardInfo
