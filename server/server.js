const path = require('path')
const express = require('express')

const postsRoutes = require('./routes/posts')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/posts', postsRoutes)

module.exports = server
