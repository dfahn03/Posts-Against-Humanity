export default class Comment {
  constructor(data) {
    this._id = data._id
    this.category = data.category
    this.values = data.values
    this.questionId = data.questionId
  }

  get Template() {

  }
}