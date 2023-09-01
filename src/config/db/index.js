
const mongoose = require('mongoose');


async function main() {
  try {
       await mongoose.connect('mongodb://127.0.0.1:27017/Blog_JS',{
        useNewUrlParser: true,
        useUnifiedTopology: true
       });
      console.log("Connect Successfully! Yahhh!")
  } catch (error) {
    console.log("Cannot connect to MongoDB") 
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports = { main }