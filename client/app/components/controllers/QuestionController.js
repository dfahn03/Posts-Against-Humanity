import QuestionService from "../services/QuestionService.js";

//PRIVATE

let _questionService = new QuestionService()

function _drawConspiracies() {
  let conspiracies = _questionService.Conspiracies
  let template = ''
  conspiracies.forEach(c => {
    template += c.Template
  })
  document.getElementById('test-div').innerHTML = template
}

function _drawWrongAnswers() {
  let wrongAnswers = _questionService.WrongAnswers
  let template = ''
  wrongAnswers.forEach(c => {
    template += c.Template
  })

  document.getElementById('test-div').innerHTML = template
}

function _drawMadLibs() {
  let madLibs = _questionService.MadLibs
  let template = ''
  madLibs.forEach(c => {
    template += c.Template
  })
  document.getElementById('test-div').innerHTML = template
}

function _drawMostPopular() {
  let mostPopular = _questionService.MostPopular
  let template = ''
  mostPopular.forEach(c => {
    template += c.Template
  })
  document.getElementById('test-div').innerHTML = template
}


//PUBLIC

export default class QuestionController {
  constructor() {
    _questionService.addSubscriber('questions', _drawConspiracies)
    _questionService.addSubscriber('questions', _drawWrongAnswers)
    _questionService.addSubscriber('questions', _drawMadLibs)
    _questionService.addSubscriber('questions', _drawMostPopular)

    _questionService.getAllQuestions()
  }
}