import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { isAuthenticated } from 'authenticare/client'

import { baseUrl } from '../config'

const defaultFormState = {
  username: '',
  password: ''
}

function AuthForm ({ name, action }) {
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
    action({ username, password }, { baseUrl })
      .then(() => {
        if (isAuthenticated()) history.push('/')
        return null
      })
      .catch(console.error)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Username:
        <input name='username' onChange={onChange} required/>
      </label>
      <label>Password:
        <input name='password' type='password' onChange={onChange} required/>
      </label>
      <button type='submit'>{name}</button>
    </form>
  )
}

export default AuthForm