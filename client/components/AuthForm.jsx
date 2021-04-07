import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.form`
  width: 100%;
  margin: 24px auto 16px;
  font-size: 1.25rem;
`

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
  text-align: left;
`

const TextInput = styled.input`
  display: block;
  width: 100%;
  margin: 4px auto 0;
  border: 1px solid hsl(200, 0%, 75%);
  border-radius: 4px;
  padding: 4px;
  &:focus {
    -mox-outline: 2px solid hsl(207, 60%, 52%);
    outline: 2px solid hsl(207, 60%, 52%);
    border-color: transparent;
  }
`

const Submit = styled.button`
  display: block;
  width: 100%;
  background: hsl(207, 60%, 52%);
  color: white;
  cursor: pointer;
  margin: auto;
  border: 1px solid transparent;
  border-radius: 24px;
  padding: 4px 24px;
`

const defaultFormState = {
  username: '',
  password: ''
}

function AuthForm ({ name, action }) {
  const dispatch = useDispatch()
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

    const user = (({ username, password }) => ({ username, password }))(form)
    const navigateTo = history.push
    dispatch(action({ user, navigateTo }))
  }

  return (
    <Wrapper onSubmit={onSubmit}>
      <Label>Username:
        <TextInput name='username' onChange={onChange} required/>
      </Label>
      <Label>Password:
        <TextInput name='password' type='password' onChange={onChange} required/>
      </Label>
      <Submit type='submit'>{name}</Submit>
    </Wrapper>
  )
}

export default AuthForm
