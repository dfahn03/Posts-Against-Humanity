import QuestionController from "./components/controllers/QuestionController.js";
import UserController from "./components/controllers/UserController.js";
import CommentController from "./components/controllers/CommentController.js";

class App {
  constructor() {
    this.controllers = {
      userController: new UserController(this.loadOtherControllers),
    };
  }
  loadOtherControllers() {
    window["app"].controllers.questionController = new QuestionController()
    window["app"].controllers.commentController = new CommentController()
  }
}

window["app"] = new App()