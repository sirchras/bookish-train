import request from 'superagent'

const url = '/api/v1/posts'

function getAllPosts () {
  return request.get(url)
    .then(res => res.body.posts)
}

function addNewPost (post) {
  return request.post(url)
    .send(post)
    .then(res => res.body)
}

export default { getAllPosts, addNewPost }
