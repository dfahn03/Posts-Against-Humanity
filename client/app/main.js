import ConspiracyController from "./components/controllers/ConspiracyController.js";

class App {
  constructor() {
    this.controllers = {
      conspiracyController: new ConspiracyController()
    }
  }
}

window["app"] = new App()