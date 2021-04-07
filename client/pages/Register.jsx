import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { register } from '../components/userSlice'
import AuthForm from '../components/AuthForm'

const Wrapper = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 32px auto;
  padding: 0 16px;
`

const Header = styled.h1`
  font-size: 2rem;
  line-height: 2.25rem;
`

const HelpText = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
  color: hsl(0, 0%, 50%);
  & > a {
    color: hsl(207, 60%, 52%); //hsl(263, 70%, 50%)
  }
  & > a:hover {
    text-decoration: none;
  }
`

function Register () {
  return (
    <Wrapper>
      <Header>Register</Header>
      <AuthForm name='Register' action={register} />
      <HelpText>
        Have an account already? <Link to='/signin'>Sign in here</Link>
      </HelpText>
    </Wrapper>
  )
}

export default Register
