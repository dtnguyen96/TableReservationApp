/*
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Team 3: Mystery Meats</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
*/

import React from "react"
import { Navbar, NavbarBrand } from "reactstrap"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand
          className="nav-brand"
          onClick={_ => {
            props.setPage(0);
          }}
        >
          Generic Restaurant
        </NavbarBrand>
        <NavbarBrand
          className="nav-brand"
          onClick={_ => {
            props.setPage(3);
          }}
        >
          Login
        </NavbarBrand>
        <NavbarBrand
          className="nav-brand"
          onClick={_ => {
            props.setPage(4);
          }}
        >
          Sign-Up
        </NavbarBrand>
      </Navbar>
    </div>
  )
}