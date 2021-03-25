import request from 'superagent'

const url = '/api/v1/posts'

export function getAllPosts () {
  return request.get(url)
    .then(res => res.body.posts)
}
