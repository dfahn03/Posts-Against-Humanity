import Conspiracy from "../../models/Conspiracy.js";

//PRIVATE
let _conspiracyApi = axios.create({
  baseURL: '//localhost:3000/api/questions',
  timeout: 3000
})

let _state = {
  conspiracies: []
}

let _subscribers = {
  conspiracies: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

//PUBLIC

export default class ConspiracyService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Conspiracies() {
    return _state.conspiracies.map(c => new Conspiracy(c))
  }

  getAllConspiracies() {
    _conspiracyApi.get()
      .then(res => {
        let data = res.data.data.map(d => new Conspiracy(d))
        _setState('conspiracies', data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  addConspiracy(conspiracyData) {
    _conspiracyApi.post('', conspiracyData)
      .then(res => {
        this.getAllConspiracies()
      })
      .catch(err => console.error(err))
  }
}