import UserService from '../components/services/UserService'

let _us = new UserService()
let _currentUser = {}
function _setUser() {
  _currentUser = _us.User
}

_us.addSubscriber('user', _setUser)


export default class Comment {
  constructor(data) {
    this._id = data._id
    this.category = data.category
    this.body = data.body
    this.values = data.values
    this.questionId = data.questionId || data.questionId._id
    this.userId = data.userId || data.userId._id
  }

  get Template() {
    return `
    <li>
      <p>${this.body}</p>
      <p>${this.values}</p>
      ${this.uChecker()}
    </li>
    `
  }

  uChecker() {
    if (_currentUser._id == this.userId) {
      return this.editTemplate
    }
  }

  get editTemplate() {
    return `<div class="btn btn-warning" onclick="app.controllers.commentController.deleteComment('${this._id}')"></div>
    `
  }
}