import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPosts } from './postsSlice'

function Feed () {
  const { posts } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <>
      <h1>Posts:</h1>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>{post.status}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Feed
