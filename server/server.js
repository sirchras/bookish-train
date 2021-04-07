const path = require('path')
const express = require('express')
const dotenv = require('dotenv')

dotenv.config({ path: path.join(__dirname, '.env') })

const postsRoutes = require('./routes/posts')
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/posts', postsRoutes)
server.use('/api/v1', authRoutes)

module.exports = server
