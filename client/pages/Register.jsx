import React from 'react'
import { Link } from 'react-router-dom'

function Register () {
  return (
    <>
      <h1>Register</h1>
      <form>
        <label>Username:
          <input required/>
        </label>
        <label>Password:
          <input type='password' required/>
        </label>
        <button type='submit'>Register</button>
      </form>
      <p>
        Have an account already? <Link to='/signin'>Sign in here</Link>
      </p>
    </>
  )
}

export default Register
