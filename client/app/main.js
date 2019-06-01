import QuestionController from "./components/controllers/QuestionController.js";
import CommentController from "../../app/Controllers/CommentController.js";

class App {
  constructor() {
    this.controllers = {
      questionController: new QuestionController,
      commentController: new CommentController,
    }
  }
}

window["app"] = new App()