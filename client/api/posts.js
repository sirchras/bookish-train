import request from 'superagent'

const url = '/api/v1/posts'

function getAllPosts () {
  return request.get(url)
    .then(res => res.body.posts)
}

export default { getAllPosts }
