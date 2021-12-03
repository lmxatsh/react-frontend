import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import SignOut from './SignOut'

function NavBar() {
  const { authStatus } = useContext(AuthContext)
  return authStatus ? (
    <SignOut />
  ) : (
    <nav className="fex-row">
      <ul>
        <li className="text-red-200 hover:text-blue">
          <Link to="/auth/signin">SignIn</Link>
        </li>
        <li className="text-red-100 hover:text-blue">
          <Link to="/auth/signup">SignUp</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
