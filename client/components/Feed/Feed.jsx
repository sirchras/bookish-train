import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import hash from 'hash-string'

import { fetchPosts } from './postsSlice'
import Post from './Post'

const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: auto;
  border-left: 1px solid hsl(200, 15%, 95%);
  border-right: 1px solid hsl(200, 15%, 95%);
`

function Feed () {
  const { posts } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <Wrapper>
      {
        posts.map(post => (
          <Post key={hash(post.status)} post={post}/>
        ))
      }
    </Wrapper>
  )
}

export default Feed
