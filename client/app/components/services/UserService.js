import User from "../../models/User.js";

//PRIVATE
let _userApi = axios.create({
  baseURL: '//localhost:3000/api/users',
  timeout: 3000
})

let _state = {
  users: []
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

  get Users() {
    return _state.users.map(u => new User(u))
  }

  getAllUsers() {
    _userApi.get()
      .then(res => {
        let data = res.data.map(d => new User(d))
        _setState('users', data)
      })
      .catch(err => {
        console.error(err)
      })
  }
}