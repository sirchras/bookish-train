const connection = require('./connection')

module.exports = {
  getAllPosts
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
