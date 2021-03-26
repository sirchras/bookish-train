import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import hash from 'hash-string'

import { fetchPosts } from './postsSlice'

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
          <article key={hash(post.status)}>
            <h2>{post.user}</h2>
            <img src='https://via.placeholder.com/150'/>
            <p>{post.status}</p>
          </article>
        ))
      }
    </>
  )
}

export default Feed
