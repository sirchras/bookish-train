import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import hash from 'hash-string'

import { fetchPosts } from './postsSlice'
import Post from './Post'

function Feed () {
  const { posts } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <>
      {
        posts.map(post => (
          <Post key={hash(JSON.stringify(post))} post={post}/>
        ))
      }
    </>
  )
}

export default Feed
