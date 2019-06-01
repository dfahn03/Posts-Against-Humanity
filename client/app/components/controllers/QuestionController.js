import QuestionService from "../services/QuestionService.js";

//PRIVATE

let _questionService = new QuestionService()

function _drawConspiracies() {
  let conspiracies = _questionService.Conspiracies
  // let template = ''
  // conspiracies.forEach(c => {
  //   template += c.Template
  // })
  document.querySelector('#posts').innerHTML = conspiracies.Template
}

function _drawWrongAnswers() {
  let wrongAnswers = _questionService.WrongAnswers
  document.querySelector('#posts').innerHTML = wrongAnswers.Template
}

function _drawMadLibs() {
  let madLibs = _questionService.MadLibs
  document.querySelector('#posts').innerHTML = madLibs.Template
}

function _drawMostPopular() {
  let mostPopular = _questionService.MostPopular
  document.querySelector('#posts').innerHTML = mostPopular.Template
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

  getConspiracies() {
    _drawConspiracies()
  }
  getWrongAnswers() {
    _drawWrongAnswers()
  }
  getMadLibs() {
    _drawMadLibs()
  }
  getMostPopular() {
    _drawMostPopular()
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