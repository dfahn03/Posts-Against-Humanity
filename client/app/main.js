import QuestionController from "./components/controllers/QuestionController.js";

class App {
  constructor() {
    this.controllers = {
      questionController: new QuestionController
    }
  }
}

window["app"] = new App()