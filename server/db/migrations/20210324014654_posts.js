exports.up = (knex) => {
  return knex.schema.createTable('posts', table => {
    table.increments('id').primary()
    table.string('status')
    table.date('created_at')
    table.integer('user_id').references('users.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('posts')
}
