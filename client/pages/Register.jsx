import React from 'react'

function Register () {
  return (
    <>
      <h1>register</h1>
      <form>
        <label>Username:
          <input required/>
        </label>
        <label>Password:
          <input type='password' required/>
        </label>
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Register
