import Comments from "../../models/Comments";

let _commentsApi = axios.create({
  baseURL: '//localhost:3000/api/comments',
  timeout: 3000
})

let _state = {
  commments: []
}

let _subscribers = {
  commments: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

export default class CommentService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Comments() {
    return _state.commments.map(c => new Comment(c))
  }


}