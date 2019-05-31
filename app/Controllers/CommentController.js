import express from 'express'
import CommentService from '../services/CommentService'

//PRIVATE
let _commentService = new CommentService()
let _repo = _commentService.repository



//PUBLIC
export default class CommentController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllComments)
      .get('/:id', this.getCommentById)
      .put('/:id', this.editComment)
      .post('', this.createComment)
      .delete('/:id', this.deleteComment)
      .use('*', this.defaultRoute)
  }

  async getAllComments(req, res, next) {
    try {
      let comments = await _repo.find({}).populate('userId')
      return res.send(comments)
    } catch (error) { next(error) }
  }
  async getCommentById(req, res, next) {
    try {
      let comment = await _repo.findOne({ _id: req.params.id }).populate('userId')
      return res.send(comment)
    } catch (error) { next(error) }
  }
  async editComment(req, res, next) {
    try {
      let comment = await _repo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      if (comment) {
        return res.send(comment)
      }
      throw new Error('Invalid Comment Id')
    } catch (error) { next(error) }
  }
  async createComment(req, res, next) {
    try {
      let comment = await _repo.create(req.body)
      return res.status(201).send(comment)
    } catch (error) { next(error) }
  }
  async deleteComment(req, res, next) {
    try {
      let comments = await _repo.findOneAndDelete({ _id: req.params.id })
      return res.send('You silenced me')
    } catch (error) { next(error) }
  }

  defaultRoute(req, res, next) {
    next({ status: 400, message: 'Ninja\'s don\'t speak' })
  }

}