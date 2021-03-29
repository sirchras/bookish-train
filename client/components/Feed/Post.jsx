import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
  display: flex;
  border-bottom: 1px solid hsl(200, 15%, 95%);
  padding: 8px 16px 16px;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 8px;
`

const Body = styled.div`
  margin-left: 16px;
`

const User = styled.h2`
  font-size: 1.25rem;
  & > a {
    color: black;
    text-decoration: none;
  }
  & > a:hover {
    text-decoration: underline;
  }
`

const Status = styled.p`
`

function Post (props) {
  const post = props.post

  return (
    <Wrapper>
      <Avatar src='https://via.placeholder.com/50'/>
      <Body>
        <User>
          <a href='#'>{post.user}</a>
        </User>
        <Status>{post.status}</Status>
      </Body>
    </Wrapper>
  )
}

export default Post
