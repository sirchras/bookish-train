import React from 'react'
import { Route } from 'react-router-dom'

import GlobalStyles from './GlobalStyles'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'

function App () {
  return (
    <>
      <Route exact path='/' component={Home}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/register' component={Register}/>
      <GlobalStyles />
    </>
  )
}

export default App
