import ConspiracyService from "../services/ConspiracyService.js";

//PRIVATE

let _conspiracyService = new ConspiracyService()

function _drawConspiracy() {
  debugger
  let conspiracies = _conspiracyService.Conspiracies
  let template = ''
  conspiracies.forEach(c => {
    template += c.Template
  })
  document.getElementById('test-div').innerHTML = template
}


//PUBLIC

export default class ConspiracyController {
  constructor() {
    _conspiracyService.addSubscriber('conspiracies', _drawConspiracy)
    _conspiracyService.getAllConspiracies()
  }
}