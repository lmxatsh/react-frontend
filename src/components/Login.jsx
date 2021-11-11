import React from 'react'

function Login() {
  return (
    <div>
      <form className="">
        <p className="mt-10">User Login</p>
        <fieldset>
          <label htmlFor="login-email">email</label>
          <input
            className="m-5 border-2 bg-purple-100 focus:bg-purple-200"
            type="email"
            id="login-email"
            required
          />
          <label htmlFor="login-password">password</label>
          <input
            className="m-5 border-2 bg-purple-100 focus:bg-purple-200"
            type="text"
            id="login-password"
          />
        </fieldset>
        <button className="border-2 w-auto rounded-md bg-gray-100 hover:bg-gray-200">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
