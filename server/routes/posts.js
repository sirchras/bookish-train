const express = require('express')

const db = require('../db/posts')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getAllPosts()
    .then(posts => {
      return res.json({ posts })
    })
    .catch(err => {
      console.error(err)
      return res.status(500).send('internal error')
    })
})

router.post('/', (req, res) => {
  const post = req.body
  db.addNewPost(post)
    .then(newPost => {
      return res.status(201).json(newPost)
    })
    .catch(err => {
      console.log(err)
      return res.status(500).send('internal error')
    })
})
