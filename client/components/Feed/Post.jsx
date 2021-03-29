import React from 'react'

function Post (props) {
  const post = props.post

  return (
    <article>
      <h2>{post.user}</h2>
      <img src='https://via.placeholder.com/150'/>
      <p>{post.status}</p>
    </article>
  )
}

export default Post
