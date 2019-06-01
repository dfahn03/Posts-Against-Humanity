import Comment from "../../models/Comment.js";

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
    return _state.commments.map(c => new Comment(c)).sort((a, b) => a.values - b.values)
  }

  getAllComments() {
    _commentsApi.get()
      .then(res => {
        let data = res.data.map(d => new Comment(d))
      })
      .catch(err => {
        console.error(err)
      })
  }

  addComments(commentData) {
    _commentsApi.post('', commentData)
      .then(res => {
        this.getAllComments()
      })
      .catch(err => console.error(err))

  }
  delete(id) {
    _commentsApi.delete(id)
      .then(res => {
        this.getAllComments()
      })
  }


}