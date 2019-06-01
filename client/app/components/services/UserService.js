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
  user: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

let _us

//PUBLIC
export default class UserService {
  constructor() {
    if (_us) {
      return _us
    }
    _us = this
  }
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get User() {
    return _state.user
  }

  async register(user) {
    try {
      let res = await _userApi.post('/', user)
      _setState('user', new User(res.data))
    } catch (e) {
      console.error(e);
    }
  }

  login(userData) {
    _userApi.get(userData.name)
      .then(res => {
        let data = new User(res.data)
        _setState('user', data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  logout() {
    _setState('user', {})
  }

}