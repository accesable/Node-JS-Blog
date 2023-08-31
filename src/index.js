const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 3000

//use the self-defined route module
const route = require('./routes')

app.use(morgan('combined'))

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  try {
       mongoose.connect('mongodb://127.0.0.1:27017/Blog_JS');
      console.log("Connect Successfully! Yahhh!")
  } catch (error) {
    console.log("Cannot connect to MongoDB") 
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
// Set 'views' directory for any views
app.set('views','./src/resources/views');

// Set the view engine to Pug
app.set('view engine', 'pug');

//This is the function defined in the ./routes/index
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
