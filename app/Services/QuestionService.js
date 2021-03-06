import mongoose from 'mongoose'

//PRIVATE

let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  title: { type: String, required: true },
  imgUrl: { type: String },
  category: { type: String, enum: ['Conspiracy', 'Wrong-Answer', 'Mad-Libs'], required: true },
  body: { type: String, required: true },
  votes: { type: Number, default: 0 },
  userId: { type: ObjectId, ref: 'user', required: true },
  createdAt: { type: Date, required: true, default: new Date().toLocaleString() }
})

//PUBLIC
export default class QuestionService {
  get repository() {
    return mongoose.model('question', _schema)
  }
}