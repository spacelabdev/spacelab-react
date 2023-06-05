import React, { useState } from "react"

const ContactInfo = () => {
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

    setEmail('')
    setPhoneNumber('')
  }

  return (
  <div className="contact-info-container">
    <h3>Contact Information</h3>
    <form>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='phoneNumber'>Phone Number</label>
        <input
          type='text'
          id='phoneNumber'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
    </form>
  </div>
  )
}

export default ContactInfo