import mongoose from 'mongoose'

//PRIVATE
let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true, default: '<i class="fas fa-user-ninja"></i>' }
}, { timestamps: true })

//PUBLIC
export default class UserService {
  get repository() {
    return mongoose.model('user', _schema)
  }
}