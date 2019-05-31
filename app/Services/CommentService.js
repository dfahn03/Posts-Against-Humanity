import mongoose from 'mongoose'

//PRIVATE
// let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, enum: ['Conspiracy', 'Wrong-Answer', 'Mad-Libs'], required: true },
  body: { type: String, required: true },
  votes: { type: Number, default: 0 },
  userId: { type: String, required: true }
}, { timestamps: true })

//PUBLIC
export default class CommentService {
  get repository() {
    return mongoose.model('comment', _schema)
  }
}