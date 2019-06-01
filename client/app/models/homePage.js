export default class HomePage {
  constructor() {

  }


  get Template() {
    return `
    <main>
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-primary">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul id="nav-cat" class="navbar-nav mr-auto">
          <li class="nav-item active">
            <button class="btn btn-block btn-danger rounded-pill" onclick=""> Conspiracy </button>
          </li>
          <li class="nav-item">
            <button class="btn btn-block btn-secondary rounded-pill" onclick=""> Wrong Answer Only </button>
          </li>
          <li class="nav-item">
            <button class="btn btn-block btn-info rounded-pill" onclick=""> Custom Insanity </button>
          </li>
        </ul>
      </div>
    </nav>
    <span id="search-span">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder='"Adventure awaits you!"'>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </span>

    <div id="carouselTrendingIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div id="carousel-item-01" class="carousel-item d-flex active">
          <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h4 class="card-title">Primary card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
            </div>
          </div>
          <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h4 class="card-title">Primary card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
            </div>
          </div>
          <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h4 class="card-title">Primary card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
            </div>
          </div>
          <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h4 class="card-title">Primary card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
            </div>
          </div>
        </div>
        <div id="carousel-item-02" class="carousel-item d-flex">

        </div>
        <div id="carousel-item-03" class="carousel-item d-flex">

        </div>
        <div id="carousel-item-04" class="carousel-item d-flex">

        </div>
      </div>
    </div>

    <div class="container" id="posts">

    </div>



  </main>

  <footer>

  </footer>`
  }
}