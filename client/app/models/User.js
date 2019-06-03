
export default class User {
  constructor(data) {
    this.name = data.name
    this.icon = data.icon
    this.id = data._id
  }

  // get CurrentUserTemplate() {
  //   return `
  //   <p class="currentUser">User: ${this.name}</p>
  //   `
  // }

}