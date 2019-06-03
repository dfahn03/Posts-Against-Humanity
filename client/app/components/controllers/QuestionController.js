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
function _drawMPQuestions() {
  let mpquestion = _questionService.MostPopular
  document.querySelector('#mpq1').innerHTML = mpquestion.getMPTemplate(`<p class="d-flex justify-content-center">Details Below</p>`)
  let mpquestion1 = _questionService.SecondMostPopular
  document.querySelector('#mpq2').innerHTML = mpquestion1.getMPTemplate(`<a class="btn btn-primary btn-sm d-flex justify-content-center" onclick="app.controllers.questionController.getDetails()">Get Details</a>`)
  let mpquestion2 = _questionService.ThirdMostPopular
  document.querySelector('#mpq3').innerHTML = mpquestion2.getMPTemplate(`<a class="btn btn-primary btn-sm d-flex justify-content-center" onclick="app.controllers.questionController.getDetails()">Get Details</a>`)
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

  // document.querySelector('#posts').innerHTML = mostPopular.Template
}

// function addQuestion() {

// }


//PUBLIC

export default class QuestionController {
  constructor() {
    _questionService.addSubscriber('questions', _drawConspiracies)
    _questionService.addSubscriber('questions', _drawWrongAnswers)
    _questionService.addSubscriber('questions', _drawMadLibs)
    _questionService.addSubscriber('questions', _drawMPQuestions)
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
  // getDetails(id) {
  //   _questionService.Conspiracies()
  // }



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