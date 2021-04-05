import React from 'react'
import { Route } from 'react-router-dom'

import GlobalStyles from './GlobalStyles'
import Home from './pages/Home'

function App () {
  return (
    <>
      <Route path='/' component={Home}/>
      <GlobalStyles />
    </>
  )
}

export default App
