exports.seed = (knex) => {
  return knex('posts').del()
    .then(() => {
      return knex('posts').insert([
        { id: 1, status: 'hello world!', created_at: new Date(Date.now()), user_id: 1 },
        { id: 2, status: 'boffo', created_at: new Date(Date.now()), user_id: 2 },
        { id: 3, status: 'status report: things are pretty good', created_at: new Date(Date.now()), user_id: 1 }
      ])
    })
}
