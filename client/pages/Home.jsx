import React from 'react'
import styled from 'styled-components'

import NewPost from '../components/feed/NewPost'
import Feed from '../components/feed/Feed'

const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: auto;
  border-left: 1px solid hsl(200, 0%, 95%);
  border-right: 1px solid hsl(200, 0%, 95%);
`

function Home () {
  return (
    <Wrapper>
      <NewPost />
      <Feed />
    </Wrapper>
  )
}

export default Home
