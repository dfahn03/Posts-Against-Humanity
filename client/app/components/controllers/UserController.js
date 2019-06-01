import UserService from "../services/UserService.js";
import { format } from "path";

//PRIVATE

let _userService = new UserService()

function _drawUsers() {
  let conspiracies = _userService.Conspiracies
  let template = ''
  conspiracies.forEach(c => {
    template += c.Template
  })
  document.getElementById('posts').innerHTML = template
}

function _drawWrongAnswers() {
  let wrongAnswers = _userService.WrongAnswers
  let template = ''
  wrongAnswers.forEach(c => {
    template += c.Template
  })

  document.getElementById('posts').innerHTML = template
}

function _drawMadLibs() {
  let madLibs = _userService.MadLibs
  let template = ''
  madLibs.forEach(c => {
    template += c.Template
  })
  document.getElementById('posts').innerHTML = template
}

function _drawMostPopular() {
  let mostPopular = _userService.MostPopular
  let template = ''
  mostPopular.forEach(c => {
    template += c.Template
  })
  document.getElementById('posts').innerHTML = template
}


//PUBLIC

export default class UserController {
  constructor() {
    _userService.addSubscriber('users', _drawConspiracies)
    _userService.addSubscriber('users', _drawWrongAnswers)
    _userService.addSubscriber('users', _drawMadLibs)
    _userService.addSubscriber('users', _drawMostPopular)

    _userService.getAllUsers()
  }

  renderUsers() {
    _drawConspiracies();
    _drawMadLibs();
    _drawWrongAnswers();
    _drawMostPopular();
  }

  getConspiracies() {
    _userService.Conspiracies
  }
  getWrongAnswers() {
    _userService.WrongAnswers
  }
  getMadLibs() {
    _userService.MadLibs
  }
  getMostPopular() {
    _userService.MostPopular
  }

  addUser(event) {
    event.preventDefault();
    let form = event.target
    let userData = {
      title: form.title.value,
      imgUrl: form.imgUrl.value,
      category: form.category.value,
      body: form.body.value
    }
    _userService.addUser(userData)
    form.reset()
  }

  delete(id) {//delete by user id, lets figure this out
    _userService.delete(id)
  }

}