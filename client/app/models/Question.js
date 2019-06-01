export default class Question {
  constructor(data) {
    this._id = data._id
    this.category = data.category
    this.body = data.body
    this.votes = data.votes
    this.byLine = data.byLine || data.userId.name
    this.image = data.imgUrl
    this.title = data.title
    this.timestamp = data.timestamp || moment(data.createdAt.split('T')[0], "YYYYMMDD").startOf('day').fromNow()
    // console.log(data.createdAt.split('T')[0])
  }

  hashtags() {
    return `<a href="#">#${this.category}</a>`
  }

  get Template() {
    return `<div class="individual-post d-flex card mb-3">
      <h3 class="mix-text-difference card-header">${this.title}</h3>
      <div class="card-body">
        <h5 class="mix-text-difference card-title">@${this.byLine}</h5>
      </div>
      <img class="post-img" style="width: 50%;" src="/assets/hitler-in-old-age-in-south-america.png" alt="Post image">
      <div class="card-body">
      <p class="mix-text-difference card-text">${this.body} ${this.hashtags()}</p>
      </div>
      <ul id="${this._id}comments" class="comment-section list-group list-group-flush">
      <span>Be the first to leave a comment!</span>
      </ul>
      <div class="card-body like-body d-flex">
      <a href="#" class="card-link"><img class="vote-icon" id="vote1" src="assets/thumbs_up_emoji_by_google_pFE_icon.ico"></img></a>
      <span>Public opinion: ${this.votes} Likes</span>
      <a href="#" class="card-link"><img class="vote-icon" id="vote2" src="assets/thumbs-down-emoji.png"></img></a>
      </div>
      <div class="mix-text-difference card-footer text-muted">
      <small>${this.timestamp}</small>
      </div>
      `
  }
}