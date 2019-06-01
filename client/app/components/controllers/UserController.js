import UserService from "../services/UserService.js";
import { format } from "path";

//PRIVATE

let _userService = new UserService()

function _drawUsers() {
  let conspiracies = _userService.Users
  let template = ''
  conspiracies.forEach(c => {
    template += c.Template
  })
  document.getElementById('users').innerHTML = template
}


//PUBLIC

export default class UserController {
  constructor() {
    _userService.addSubscriber('users', _drawUsers)
    _userService.getAllUsers()
  }

  getAllUsers() {
    _userService.getAllUsers()
  }

  addUser(event) {
    event.preventDefault();
    let form = event.target
    let userData = {
      name: form.name.value,
    }
    _userService.addUser(userData)
    form.reset()
  }

  delete(id) {//delete by user id, lets figure this out
    _userService.delete(id)
  }

}