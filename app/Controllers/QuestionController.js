import express from 'express'
import QuestionService from '../services/QuestionService'

//PRIVATE
let _questionService = new QuestionService()
let _repo = _questionService.repository

//PUBLIC
export default class QuestionController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllQuestions)
      .get('/:id', this.getQuestionById)
      .put('/:id', this.editQuestion)
      .post('', this.createQuestion)
      .delete('/:id', this.deleteQuestion)
      .use('*', this.defaultRoute)
  }

  async getAllQuestions(req, res, next) {
    try {
      let questions = await _repo.find({})
      return res.send(questions)
    } catch (error) { next(error) }
  }
  async getQuestionById(req, res, next) {
    try {
      let question = await _repo.findOne({ id: req.params.id })//populate comments
      return res.send(question)
    } catch (error) { next(error) }
  }
  async editQuestion(req, res, next) {
    try {
      let question = await _repo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      if (question) {
        return res.send(question)
      }
      throw new Error('Invaled Question Id')
    } catch (error) { next(error) }
  }
  async createQuestion(req, res, next) {
    try {
      let question = await _repo.create(req.body)
      return res.status(201).send(question)
    } catch (error) { next(error) }
  }
  async deleteQuestion(req, res, next) {
    try {
      let questions = await _repo.findOneAndDelete({ _id: req.params.id })
      return res.send('You burned me!')
    } catch (error) { next(error) }
  }

  defaultRoute(req, res, next) {
    next({ status: 400, message: 'Where\'s Waldo‽' })
  }

}