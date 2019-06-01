import QuestionService from "../services/QuestionService.js";

//PRIVATE

let _questionService = new QuestionService()

function _drawConspiracies() {
  let conspiracies = _questionService.Conspiracies
  let template = ''
  conspiracies.forEach(c => {
    template += c.Template
  })
  document.getElementById('posts').innerHTML = template
}

function _drawWrongAnswers() {
  let wrongAnswers = _questionService.WrongAnswers
  let template = ''
  wrongAnswers.forEach(c => {
    template += c.Template
  })

  document.getElementById('posts').innerHTML = template
}

function _drawMadLibs() {
  let madLibs = _questionService.MadLibs
  let template = ''
  madLibs.forEach(c => {
    template += c.Template
  })
  document.getElementById('posts').innerHTML = template
}

function _drawMostPopular() {
  let mostPopular = _questionService.MostPopular
  let template = ''
  mostPopular.forEach(c => {
    template += c.Template
  })
  document.getElementById('posts').innerHTML = template
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

  renderQuestions() {
    _drawConspiracies();
    _drawMadLibs();
    _drawWrongAnswers();
    _drawMostPopular();
  }

  getConspiracies() {
    _questionService.Conspiracies
  }
  getWrongAnswers() {
    _questionService.WrongAnswers
  }
  getMadLibs() {
    _questionService.MadLibs
  }
  getMostPopular() {
    _questionService.MostPopular
  }

  addQuestion(event) {
    event.preventDefault();
    let form = event.target
    let questionData = {
      title: form.title.value,
      imgUrl: form.imgUrl.value,
      category: form.category.value,
      body: form.body.value
    }
    _questionService.addQuestion(questionData)
    form.reset()
  }

  delete(id) {//delete by user id, lets figure this out
    _questionService.delete(id)
  }

}