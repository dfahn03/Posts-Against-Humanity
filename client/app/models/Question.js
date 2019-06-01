export default class Question {
  constructor(data) {
    this._id = data._id
    this.category = data.category
    this.body = data.body
    this.votes = data.votes
  }

  hashtags() {
    `<a href="#">#${this.category}</a>`
  }

  get Template() {
    return `<div class="individual-post d-flex not-the-d-fleex card mb-3">
      <h3 class="mix-text-difference card-header">Hitler Survived WWII</h3>
      <div class="card-body">
      <h5 class="mix-text-difference card-title">Post By:Micaiah Evans</h5>
      <h6 class="card-subtitle text-muted">${this.hashtags()}
      </h6>
      </div>
      <img class="post-img" style="width: 50%;" src="/assets/hitler-in-old-age-in-south-america.png" alt="Post image">
      <div class="card-body">
      <p class="mix-text-difference card-text">${this.body}</p>
      </div>
      <ul class="comment-section list-group list-group-flush">
      <li style="background-color: #00000000;" class="comment list-group-item">comment</li>
      <li style="background-color: #00000000;" class="comment list-group-item">comment</li>
      <li style="background-color: #00000000;" class="comment list-group-item">comment</li>
      </ul>
      <div class="card-body like-body d-flex">
      <a href="#" class="card-link"><img class="vote-icon" src="assets/thumbs_up_emoji_by_google_pFE_icon.ico"></img></a>
      <span>Public opinion:${this.votes} Likes</span>
      <a href="#" class="card-link"><img class="vote-icon" src="assets/1f595_nkA_icon.ico"></img></a>
      </div>
      <div class="mix-text-difference card-footer text-muted">
      2 days ago
      </div>
      `
  }
}