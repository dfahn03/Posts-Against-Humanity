import mongoose from 'mongoose'

const connectionString = 'mongodb+srv://student:student@Cluster0-wtsis.mongodb.net/posts-against-humanity?retryWrites=true&w=majority'
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