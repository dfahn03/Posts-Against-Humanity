import mongoose from 'mongoose'

const connectionString = 'mongodb+srv://student1:student1@cluster0-vcwlm.azure.mongodb.net/posts-against-humanit?retryWrites=true&w=majority'
let connection = mongoose.connection
mongoose.connect(connectionString, {
  useNewUrlParser: true
})
connection.on('error', err => {
  console.error('[DATABASE ERROR]:', err)
})
connection.once('open', () => {
  console.log('connected to the database')
})
