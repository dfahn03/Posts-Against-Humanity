export default class Question {
  constructor(data) {
    this._id = data._id
    this.title = data.title
    this.category = data.category
    this.byLine = data.byLine || data.userId.name
    this.imgUrl = data.imgUrl || 'https://trustworks.files.wordpress.com/2017/04/questions.jpeg?w=960&h=615'
    this.body = data.body
    this.votes = data.votes
    this.timestamp = data.timestamp || moment(data.createdAt.split('T')[0], "YYYYMMDD").startOf('day').fromNow()
    // console.log(data.createdAt.split('T')[0])
  }

  hashtags() {
    return `<a href="#" class="text-muted">#${this.category}</a>`
  }

  get Template() {
    return `
    <div class="individual-post d-flex card mb-3 text-white">
        <h3 class="mix-text-difference card-header">${this.title}</h3>
        <h4 class="mix-text-difference card-header">${this.category}</h4>
        <div class="card-body">
          <h6 class="mix-text-difference card-title">@${this.byLine}</h6>
        </div>
        <img class="post-img" style="width: 50%;" src="${this.imgUrl}" alt="Post image">
        <div class="card-body">
        <div class="card-body like-body d-flex pt-0">
          <p class="mix-text-difference card-text">${this.body} ${this.hashtags()}</p>
        </div>
        <div class="card-body d-flex justify-content-center align-items-center pt-0">
          <a href="#" class="card-link"><img class="vote-icon1" src="assets/cowboy-emoji.png"></img></a>
          <span class="totalVotes">Public opinion: ${this.votes} Likes</span>
          <a href="#" class="card-link"><img class="vote-icon2" src="assets/thumbs-down-emoji.png"></img></a>
        </div>
        <div class="card-body d-flex justify-content-center align-items-center">
          <ul id="${this._id}comments" class="comment-section list-group list-group-flush">
          <span>Be the first to leave a comment!</span>
          </ul>
        </div>
        <div class="mix-text-difference card-footer text-muted">
          <small>${this.timestamp}</small>
        </div>
      </div>
      `
  }

  getMPTemplate(button) {
    return `
    <div class="card mb-2 cardStyle">
      <img class="card-img-top" src="${this.imgUrl}"alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">${this.title}</h4>
        <p class="card-text">${this.category}</p>
        ${button}
      </div>
    </div>
    `
  }

  get cTemplate() {
    return `
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
      <div class="card-body">
        <h4 class="card-title">${this.title}</h4>
        <h5 class="card-title">${this.category}</h5>
        <button class="btn btn-pill" onclick="app.controllers.questionController.getMoreInfo()"</button>
      </div>
    </div>
    `
  }
}

//Create Post Template

{/* <div class="col-md-4 pr-0">
  <div class="card mb-2 cardStyle">
    <div class="card-body">
      <h4 class="card-title">Create Post</h4>
      <form>
        <div class="form-group row" onsubmit="app.controllers.questionController.addQuestion()">
          <label for="colFormLabelSm" class="col-sm-4 col-form-label col-form-label-sm">Title</label>
          <div class="col-sm-8">
            <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Title">
                    </div>
            <label for="colFormLabelSm" class="col-sm-4 col-form-label col-form-label-sm">Category</label>
            <div class="col-sm-8">
              <input type="email" class="form-control form-control-sm" id="colFormLabelSm"
                placeholder="Category">
                    </div>
              <label for="colFormLabelSm" class="col-sm-4 col-form-label col-form-label-sm">ImageUrl</label>
              <div class="col-sm-8">
                <input type="email" class="form-control form-control-sm" id="colFormLabelSm"
                  placeholder="ImageUrl">
                    </div>
                <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Body</label>
                <div class="col-sm-9">
                  <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Body">
                    </div>
                </div>
                </form>
              <a class="btn btn-primary d-flex justify-content-center" type="submit">Create</a>
            </div>
          </div>
        </div> */}