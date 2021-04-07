import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { signIn } from '../components/userSlice'
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

function SignIn () {
  return (
    <Wrapper>
      <Header>Sign In</Header>
      <AuthForm name='Sign In' action={signIn} />
      <HelpText>
        {'Don\'t'} have an account? <Link to='/register'>Register here</Link>
      </HelpText>
    </Wrapper>
  )
}

export default SignIn
