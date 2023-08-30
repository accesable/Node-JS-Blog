const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 3000

const route = require('./routes')

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
// Set 'views' directory for any views
app.set('views','./src/resources/views');

// Set the view engine to Pug
app.set('view engine', 'pug');

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
