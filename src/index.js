const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000


app.use(morgan('combined'))

// Set 'views' directory for any views
app.set('views','./src/resources/views');

// Set the view engine to Pug
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
