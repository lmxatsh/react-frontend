import React, { useState } from 'react'
import axios from 'axios'

function Register() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [submitting, setSubmitting] = useState(false)
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
    console.log(formData)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    axios
      .post('/api/users/new', formData)
      .then((res) => {
        console.log(res)
        setSubmitting(false)
      })
      .catch((err) => {
        setSubmitting(false)
        console.log(`Error: ${err}`)
      })
  }

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <p className="mt-10">User Register</p>
        <fieldset>
          <label htmlFor="login-email">email</label>
          <input
            className="m-5 border-2 bg-purple-100 focus:bg-purple-200"
            type="email"
            id="login-email"
            name="email"
            disabled={submitting}
            required
            onChange={handleChange}
          />
          <label htmlFor="login-password">password</label>
          <input
            className="m-5 border-2 bg-purple-100 focus:bg-purple-200"
            type="text"
            name="password"
            id="login-password"
            disabled={submitting}
            required
            onChange={handleChange}
          />
        </fieldset>
        <button
          type="submit"
          disabled={submitting}
          className="border-2 w-auto rounded-md bg-gray-100 hover:bg-gray-200"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Register
