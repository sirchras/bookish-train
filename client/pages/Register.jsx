import React from 'react'
import { Link } from 'react-router-dom'
import { register } from 'authenticare/client'

import AuthForm from '../components/AuthForm'

function Register () {
  return (
    <>
      <h1>Register</h1>
      <AuthForm name='Register' action={register} />
      <p>
        Have an account already? <Link to='/signin'>Sign in here</Link>
      </p>
    </>
  )
}

export default Register
