import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { isAuthenticated, signIn } from 'authenticare/client'

import { baseUrl } from '../config'

const defaultFormState = {
  username: '',
  password: ''
}

function SignIn () {
  const history = useHistory()
  const [form, setForm] = useState(defaultFormState)

  function onChange (evt) {
    const { name, value } = evt.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function onSubmit (evt) {
    evt.preventDefault()

    const { username, password } = form
    signIn({ username, password }, { baseUrl })
      .then(() => {
        if (isAuthenticated()) history.push('/')
        return null
      })
      .catch(console.error)
  }

  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <label>Username:
          <input name='username' onChange={onChange} required/>
        </label>
        <label>Password:
          <input name='password' type='password' onChange={onChange} required/>
        </label>
        <button type='submit'>Sign In</button>
      </form>
      <p>
        {'Don\'t'} have an account? <Link to='/register'>Register here</Link>
      </p>
    </>
  )
}

export default SignIn
