const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 3000


app.use(morgan('combined'))

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded());
app.use(express.json());
// Set 'views' directory for any views
app.set('views','./src/resources/views');

// Set the view engine to Pug
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/search',(req,res)=>{
  res.render('search')
  // req.query
})

app.post('/search',(req,res)=>{
  let {name,gender} = req.body
  console.log(name)
  res.render('search')
})


app.get('/news', (req,res) => res.render('news'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
