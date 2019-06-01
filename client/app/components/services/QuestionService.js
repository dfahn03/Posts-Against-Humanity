import Question from "../../models/Question.js";

//PRIVATE
let _questionApi = axios.create({
  baseURL: '//localhost:3000/api/questions',
  timeout: 3000
})

let _state = {
  questions: []
}

let _subscribers = {
  questions: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

//PUBLIC

export default class QuestionService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Conspiracies() {
    let conspiracies = _state.questions.filter(q => q.category == "Conspiracy")
    return conspiracies.map(c => new Question(c)).sort((a, b) => a.votes - b.votes)
  }

  get WrongAnswers() {
    let wrongAnswers = _state.questions.filter(q => q.category == "Wrong-Answers")
    return wrongAnswers.map(c => new Question(c)).sort((a, b) => a.votes - b.votes)
  }

  get MadLibs() {
    let madLibs = _state.questions.filter(q => q.category == "Mad-Libs")
    return madLibs.map(c => new Question(c)).sort((a, b) => a.votes - b.votes)
  }

  get MostPopular() {
    return _state.questions.sort((a, b) => a.votes - b.votes)
  }

  getAllQuestions() {
    _questionApi.get()
      .then(res => {
        let data = res.data.map(d => new Question(d))
        _setState('questions', data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  addQuestion(questionData) {
    _questionApi.post('', questionData)
      .then(res => {
        this.getAllQuestions()
      })
      .catch(err => console.error(err))
  }
}