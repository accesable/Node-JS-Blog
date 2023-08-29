const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/main', (req, res) => {
  res.send('Hello World! From Main Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
