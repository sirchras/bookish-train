import React from 'react'
import { Link } from 'react-router-dom'
import { signIn } from 'authenticare/client'

import AuthForm from '../components/AuthForm'

function SignIn () {
  return (
    <>
      <h1>Sign In</h1>
      <AuthForm name='Sign In' action={signIn} />
      <p>
        {'Don\'t'} have an account? <Link to='/register'>Register here</Link>
      </p>
    </>
  )
}

export default SignIn
