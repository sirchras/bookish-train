const connection = require('./connection')

module.exports = {
  getAllPosts,
  addNewPost
}

function getAllPosts (db = connection) {
  return db('posts')
    .join('users', 'posts.user_id', 'users.id')
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

function addNewPost ({ status, userId }, db = connection) {
  return db('posts')
    .insert({ status, user_id: userId }, 'id')
    .then(id => getPost(id, db))
}
