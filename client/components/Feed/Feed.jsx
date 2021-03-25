import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchPosts } from './postsSlice'

function Feed () {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('hello world!')
    dispatch(fetchPosts())
  }, [])

  return (
    <h1>hello world!</h1>
  )
}

export default Feed
