import UserService from "../services/UserService.js";
//PRIVATE

let _userService = new UserService()

function _drawUser() {
  if (_userService.User.id) {
    _drawMainPage()
  } else {
    _drawLoginPage()
  }
}

function _drawLoginPage() {
  document.getElementById('login-page').classList.remove('d-none')
  document.getElementById('main-page').classList.add('d-none')

}

function _drawMainPage() {
  document.getElementById('main-page').classList.remove('d-none')
  document.getElementById('login-page').classList.add('d-none')
}

//PUBLIC

export default class UserController {
  constructor(onLogin) {
    _userService.addSubscriber('user', onLogin)
    _userService.addSubscriber('user', _drawUser)
  }

  login(event) {
    event.preventDefault();
    let form = event.target
    let userData = {
      name: form.name.value,
    }
    _userService.login(userData)
    form.reset()
  }

  register(event) {
    event.preventDefault();
    let form = event.target.parentElement.parentElement
    let userData = {
      name: form.name.value,
    }
    _userService.register(userData)
    form.reset()
  }

  logout() {
    _userService.logout()
  }

}