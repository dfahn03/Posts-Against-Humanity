import mongoose from 'mongoose'

//PRIVATE

let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  body: { type: String, required: true },
  values: { type: Number, default: 0 },
  questionId: { type: ObjectId, required: true },
  userId: { type: ObjectId, required: true }
}, { timestamps: true })

//PUBLIC
export default class CommentService {
  get repository() {
    return mongoose.model('comment', _schema)
  }
}