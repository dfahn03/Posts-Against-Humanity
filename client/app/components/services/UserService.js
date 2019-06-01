import User from "../../models/User.js";

//PRIVATE
let _userApi = axios.create({
  baseURL: '//localhost:3000/api/users',
  timeout: 3000
})


let _state = {
  user: {}
}

let _subscribers = {
  users: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

//PUBLIC

export default class UserService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get User() {
    return new User(_state.user)
  }

  getCurrentUser() {
    _userApi.get()
      .then(res => {
        let data = res.data.map(d => new User(d))
        _setState('user', data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  addUser(userData) {
    _userApi.post('', userData)
      .then(res => {
        this.getCurrentUser()
      })
      .catch(err => console.error(err))
  }

  delete(id) {
    _userApi.delete(id)
      .then(res => {
        this.getCurrentUser()
      })
  }

}