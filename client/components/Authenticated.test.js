import React from 'react'
import { screen, render } from '@testing-library/react'
import { isAuthenticated } from '../auth'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

jest.mock('../auth')

describe('IfAuthenticated', () => {
  it('renders children if isAuthenticated returns true', () => {
    isAuthenticated.mockImplementation(() => true)
    render(
      <IfAuthenticated>
        <p>hello world!</p>
      </IfAuthenticated>
    )
    expect(screen.getByText('hello world!')).toBeInTheDocument()
  })

  it('doesn\'t render children if isAuthenticated returns false', () => {
    isAuthenticated.mockImplementation(() => false)
    render(
      <IfAuthenticated>
        <p>hello world!</p>
      </IfAuthenticated>
    )
    expect(screen.queryByText('hello world!')).toBeNull()
  })
})

describe('IfNotAuthenticated', () => {
  it('renders children if isAuthenticated returns false', () => {
    isAuthenticated.mockImplementation(() => false)
    render(
      <IfNotAuthenticated>
        <p>hello world!</p>
      </IfNotAuthenticated>
    )
    expect(screen.getByText('hello world!')).toBeInTheDocument()
  })

  it('doesn\'t render children if isAuthenticated returns true', () => {
    isAuthenticated.mockImplementation(() => true)
    render(
      <IfNotAuthenticated>
        <p>hello world!</p>
      </IfNotAuthenticated>
    )
    expect(screen.queryByText('hello world!')).toBeNull()
  })
})
