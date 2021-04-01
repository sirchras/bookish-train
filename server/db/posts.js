const connection = require('./connection')

module.exports = {
  getAllPosts,
  getPostById,
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

function getPostById (id, db = connection) {
  return db('posts')
    .join('users', 'posts.user_id', 'users.id')
    .select(
      'posts.id as id',
      'status',
      'created_at as createdAt',
      'users.id as userId',
      'name as user'
    )
    .where('posts.id', id)
    .first()
}

function addNewPost (post, db = connection) {
  return db('posts')
    .insert({
      ...post,
      created_at: new Date(Date.now())
    }, 'id')
    .then(id => getPostById(id, db))
}
