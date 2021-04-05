import React from 'react'

function SignIn () {
  return (
    <>
      <h1>sign-in</h1>
      <form>
        <label>Username:
          <input required/>
        </label>
        <label>Password:
          <input type='password' required/>
        </label>
        <button type='submit'>Sign In</button>
      </form>
    </>
  )
}

export default SignIn
