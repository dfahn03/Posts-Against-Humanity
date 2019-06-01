export default class Question {
  constructor(data) {
    this._id = data._id
    this.category = data.category
    this.body = data.body
    this.votes = data.votes
  }

  get Template() {
    return `<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
        <h3 class="card-header">${this.category}</h3>
        <div class="card-body">
          <p>${this.body}</p>
          <p>${this.votes}</p>
        </div>
      </div>`
  }
}