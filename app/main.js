import express from 'express'
import './db/dbconfig'

let server = express()
let bp = require('body-parser')

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())

//register routes
import UserController from './controllers/UserController'
import QuestionController from './controllers/QuestionController'
import CommentController from './controllers/CommentController'

server.use('/api/users', new UserController().router)
server.use('/api/questions', new QuestionController().router)
server.use('/api/comments', new CommentController().router)







server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } })
})
server.listen(3000, () => { console.log('Listening on port 3000') })