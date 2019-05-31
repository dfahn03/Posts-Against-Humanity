import mongoose from 'mongoose'

//PRIVATE

let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  body: { type: String, required: true },
  values: { type: Number, default: 0 },
  questionId: { type: ObjectId, ref: 'question', required: true },
  userId: { type: ObjectId, ref: 'user', required: true }
}, { timestamps: true })

//PUBLIC
export default class CommentService {
  get repository() {
    return mongoose.model('comment', _schema)
  }
}