import CommentService from "../services/CommentService.js";


let _commentService = new CommentService()

function _drawComments() {
  let comments = _commentService.Comments
  let template = ''
  comments.forEach(comment => {
    template += comment.Template
  })
  document.getElementById('')//not sure how to structure this
}

export default class CommentController {
  constructor() {
    _commentService.addSubscriber('comments', _drawComments)

    _commentService.getAllComments()
  }

  addComments(event) {
    event.preventDefault();
    let form = event.target
    let commentData = {
      body: form.body.value
    }
    _commentService.addComments
  }


}