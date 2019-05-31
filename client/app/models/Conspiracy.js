export default class Conspiracy {
  constructor(data) {
    this._id = data._id
    this.category = data.questions + 'Conspiracy'
  }

  get Template() {
    return `

    `
  }
}