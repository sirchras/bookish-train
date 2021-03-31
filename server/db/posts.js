const connection = require('./connection')

module.exports = {
  getAllPosts,
  addNewPost
}

function getAllPosts (db = connection) {
  return db('posts')
    .join('users', { 'users.id': 'posts.user_id' })
    .select(
      'posts.id as id',
      'status',
      'created_at as createdAt',
      'users.id as userId',
      'name as user'
    )
}

function getPost (id, db = connection) {
  return db('posts')
    .where('id', id)
    .first()
}

function addNewPost (post, db = connection) {
  return db('posts')
    .insert({
      ...post,
      created_at: new Date(Date.now())
    }, 'id')
    .then(id => getPost(id, db))
}
