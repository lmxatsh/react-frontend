import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

function SignOut() {
  const [submitting, setSubmitting] = useState(false)
  const { authStatus, setAuthStatus } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleClick(event) {
    event.preventDefault()
    setSubmitting(true)
    axios
      .post('/api/auth/logout')
      .then((res) => {
        console.log(res)
        setSubmitting(false)
        setAuthStatus(null)
        navigate('/auth/signin')
      })
      .catch((err) => {
        setSubmitting(false)
        console.log(`Error: ${err}`)
      })
  }

  return (
    <>
      <button
        disabled={submitting}
        className="border-2 w-auto rounded-md bg-gray-100 hover:bg-gray-200"
        onClick={handleClick}
      >
        SignOut
      </button>
    </>
  )
}

export default SignOut
