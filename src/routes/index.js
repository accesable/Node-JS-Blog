const newsRouter = require('./news')


function route(app){

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
    app.use('/news',newsRouter)
    //app.get('/news', (req,res) => res.render('news'))
}

module.exports = route;